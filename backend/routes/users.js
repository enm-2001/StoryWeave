const express = require("express");
const router = express.Router();
const client = require("../config/connection");
const jwt = require("jsonwebtoken");

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
}

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

router.post("/signup", (req, res) => {
  console.log(req.body);
  const { name, username, email, password } = req.body;

  const query = `INSERT INTO users (name, username, email, password, coins)
    VALUES ('${name}', '${username}','${email}', '${password}', 0);
    `;
  client.query(query, (err, result1) => {
    if (result1) {
      console.log(result1);
      res.send("insertion completed");
    } else {
      console.log("Error: ", err);
    }
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const query = `select * from users where username = '${username}'`;
  client.query(query, (err, result) => {
    if (!err) {
      console.log(result.rows[0]);
      if (result.rows[0].password === password) {
        // console.log("ppppppppp");
        // const user = result.rows[0];
        // res.send(user);
        const user = { name: username, user_id: result.rows[0].user_id};
        const accessToken = generateAccessToken(user);
        res.cookie('access_token', token, {
          httpOnly: true
        }).json({ accessToken: accessToken, user: user });

      } else {
        res.json({ pcheck: true });
      }
    } else {
      console.log("Error: ", err);
    }
  });
});

router.get("/users/:user_id", (req, res) => {
  const { user_id } = req.params;
  const query = `select * from users where user_id = ${user_id}`;
  client.query(query, (err, result) => {
    if (!err) {
      res.send(result.rows[0]);
    } else {
      console.log("err getting user: ", err);
    }
  });
});

router.get("/users/:user_id/stories", (req, res) => {
  const { user_id } = req.params;
  const query = `select * from story where creator = ${user_id}`;
  client.query(query, (err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      console.log(err);
    }
  });
});

router.get("/users/:user_id/coins", (req, res) => {
  const { user_id } = req.params;
  const query = `select coins from users where user_id = ${user_id}`;
  client.query(query, (err, result) => {
    if (!err) {
      res.send(result.rows[0]);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
