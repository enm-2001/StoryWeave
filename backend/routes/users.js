const express = require("express");
const router = express.Router();
const client = require("../config/connection");

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

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  const query1 = `select * from users where email = '${email}'`;
  client.query(query1, (err, result) => {
    // console.log(result);
    if (!err) {
      if (result.rows.length == 0) {
        const query = `INSERT INTO users (name, email, password, coins)
    VALUES ('${name}', '${email}', '${password}', 0);
    `;
        client.query(query, (err, result1) => {
          if (!err) {
            res.send("insertion completed");
          } else {
            console.log("Error: ", err);
          }
        });
      }
      else{
        res.send("user already exists")
      }
    }
    else{
        console.log("Errr===",err);
    }

  });
});

router.post("/login", (req, res) => {
  const { email, pwd } = req.body;
  const query = `select password from users where email = '${email}'`;
  client.query(query, (err, result) => {
    if (!err) {
      // console.log(result);
      if (result.rows.length == 0) {
        res.send("user does not exist");
      } else {
        const { password } = result.rows[0];
        if (password != pwd) {
          // console.log(pwd, password);
          res.send("incorrect password");
        } else res.send("login successful");
      }
    } else {
      console.log("Error: ", err);
    }
  });
});

router.get("/users/:user_id", (req, res) => {
    const {user_id} = req.params
    const query = `select * from users where user_id = ${user_id}`
    client.query(query, (err, result) => {
        if(!err){
            res.send(result.rows[0])
        }
        else{
            console.log("err getting user: ", err);
        }
    })
})

router.get("/users/:user_id/stories", (req, res) => {
    const {user_id} = req.params
    const query = `select * from story where creator = ${user_id}`
    client.query(query, (err, result) => {
        if(!err){
            res.send(result.rows)
        }
        else{
            console.log(err);
        }
    })
})

router.get("/users/:user_id/coins", (req, res) => {
    const {user_id} = req.params
    const query = `select coins from users where user_id = ${user_id}`
    client.query(query, (err, result) => {
        if(!err){
            res.send(result.rows[0])
        }
        else{
            console.log(err);
        }
    })
})

module.exports = router;
