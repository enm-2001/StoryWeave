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

router.post("/checkUser", (req, res) => {
  const email = req.body.email;
  client.query(
    "select email from users where email = $1",
    [email],
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
  const { name, email, password } = req.body;

  const query = `INSERT INTO users (name, email, password, coins)
    VALUES ('${name}', '${email}', '${password}', 0);
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
  const { email, password } = req.body;
  const query = `select * from users where email = '${email}'`;
  client.query(query, (err, result) => {
    if (!err) {
      console.log(result.rows[0]);
      if (result.rows[0].password === password) {
        console.log("ppppppppp");
        const user = result.rows[0];
        res.send(user);
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

router.get("/users/:user")

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
