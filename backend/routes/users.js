const express = require("express");
const router = express.Router();
const client = require("../config/connection");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
require('dotenv').config()
const { authenticateToken } = require("../middlewares/checkAuth");

// function generateAccessToken(user) {
//   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
// }

router.get("/users", (req, res) => {
  client.query("select * from users", (err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      console.log(err);
    }
  });
  client.close;
});

router.post("/checkUser", (req, res) => {
  const username = req.body.username;
  client.query(
    "select username from users where username = $1",
    [username],
    (error, results) => {
      if (error) {
        res.status(500).send("Server error");
      } else if (results.rows.length > 0) {
        res.json({ exists: true });
      } else {
        res.json({ exists: false });
      }
    }
  );
  client.end;
});

router.post("/signup", async (req, res) => {
  console.log(req.body);
  const { name, username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10)

  const query = `INSERT INTO users (name, username, email, password, coins)
    VALUES ($1, $2, $3, $4, $5) returning user_id`;
  const values = [name, username, email, hashedPassword, 0]

  await client.query(query, values, (err, result1) => {
    if (result1) {
      const user = { username: username, user_id: result1.rows[0].user_id};
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
        // console.log("login generate", token)
        res.json({ token: token });
    } else {
      console.log("Error: ", err);
    }
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const query = `select * from users where username = '${username}'`;
  const result = await client.query(query)
  if(!result) {
    console.log("Error: ", err);
    return;
  }
      console.log(result.rows[0]);

      const passwordCorrect = await bcrypt.compare(password, result.rows[0].password)
      console.log(passwordCorrect);
      if (passwordCorrect) {

        const user = { username: username, user_id: result.rows[0].user_id};
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
        // console.log("login generate", token)
        res.json({ token: token });

      } else {
        res.json({ pcheck: true });
      }
  
  });

router.get("/users/:user_id", authenticateToken, async (req, res) => {
  const { user_id } = req.params;
  const query1 = `select * from users where user_id = ${user_id}`;
  
  const result1 = await client.query(query1);
  if(!result1){
    console.log("Error in query1:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
  }
  let coins
  if(result1.rows[0] != null){
    coins = result1.rows[0].coins
  }
  else{
    coins = 0
  }

  const query2 = `select count(*) as stories from story where creator = ${user_id}`;
  const result2 = await client.query(query2)
  if(!result2){
    console.log("Error in query2:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
  }
  let stories_created
  if(result2.rows[0] != null){
    stories_created = result2.rows[0].stories
  }
  else{
    stories_created = 0
  }

  const query3 = `select count(distinct(story_id)) as contributions from contributions where user_id = ${user_id} group by story_id`;
  const result3 = await client.query(query3)
  if(!result3){
    console.log("Error in query3:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
  }
  let stories_updated
  if(result3.rows[0] != null){
    stories_updated = result3.rows[0].contributions
  }
  else{
    stories_updated = 0
  }


  const query4 = `select count(*) as pending from pending_contr where story_id in(select story_id from story where creator = ${user_id})`
  const result4 = await client.query(query4)
  if(!result4){
    console.log("Error in query4:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
  }
  let pending_requests
  if(result4.rows[0] != null){
    pending_requests = result4.rows[0].pending
  }
  else{
    pending_requests = 0
  }

  const response = {
    coins,
    stories_created,
    stories_updated,
    pending_requests
  }

  res.send(response)
});

//get started stories of particular user
router.get("/users/startedstories/:user_id", authenticateToken, (req, res) => {
  const { user_id } = req.params;
  const query = `select s.*, c.description as des, u.username as creator from story s
  join users u on u.user_id = s.creator
  JOIN (
      SELECT story_id, MIN(contr_id) AS min_contr_id
      FROM contributions
      GROUP BY story_id
    ) AS min_contr ON min_contr.story_id = s.story_id
    JOIN contributions c ON c.story_id = min_contr.story_id AND c.contr_id = min_contr.min_contr_id
  where s.creator = ${user_id}`;
  client.query(query, (err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      console.log("get started stories: ",err);
    }
  });
});

//get contributed stories
router.get("/users/contributedstories/:user_id", authenticateToken, (req, res) => {
  const { user_id } = req.params;
  const query = `select s.*, c.description as des, u.username as creator from story s 
  join contributions c on c.story_id = s.story_id 
  join users u on u.user_id = s.creator
  where c.user_id = ${user_id} and s.creator != ${user_id} group by s.story_id, c.description, u.username`;
  client.query(query, (err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      console.log("get contributed stories: ",err);
    }
  });
});

module.exports = router;
