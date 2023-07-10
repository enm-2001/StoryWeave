const express = require("express");
const router = express.Router();
const client = require("../config/connection");

router.post("/story/create", (req, res) => {
  const { user_id } = req.body;
  const { title, description } = req.body.story;
  // console.log(title);
  const today = new Date();
  const date = today.toLocaleDateString(0, 10);
  console.log(date);
  const query = `insert into story(title,description,creator,date_created) values('${title}','${description}','${user_id}','${date}');`;
  client.query(query, (err, result) => {
    if (!err) {
      const query2 = `update users set coins = coins + 15 where user_id = ${user_id}`;
      client.query(query2, (err, result2) => {
        if (!err) {
          res.send("insertion of story complete");
        } else {
          console.log(err);
        }
      });
    } else {
      console.log("err in story: ", err);
    }
  });
});

router.get("/story/:story_id", (req, res) => {
  const { story_id } = req.params;
  const query = `select * from story where story_id = ${story_id}`;
  client.query(query, (err, result) => {
    if (!err) {
      res.send(result.rows[0]);
    } else {
      console.log("err getting story: ", err);
    }
  });
});

router.delete("/story/delete", (req, res) => {
  const { story_id } = req.body;
  const query = `delete from story where story_id = ${story_id}`;
  client.query(query, (err, result) => {
    if (!err) {
      res.send("deleted");
    } else {
      console.log(err);
    }
  });
});

router.put("/story/update", (req, res) => {
  const { story_id, des, user_id } = req.body;
  const query1 = `SELECT description FROM story WHERE story_id = $1`;
  client.query(query1, [story_id], (err, result) => {
    if (err) {
      console.log("Error in query1:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    const { description } = result.rows[0];
    const updatedDescription = description + " " + des;
    const query2 = `UPDATE story SET description = $1, last_updated = $2 WHERE story_id = $3`;
    client.query(
      query2,
      [updatedDescription, user_id, story_id],
      (err2, result2) => {
        if (err2) {
          console.log("Error in query2:", err2);
          res.status(500).json({ error: "Internal server error" });
          return;
        }

        const query3 = `UPDATE users SET coins = coins + 5 WHERE user_id = $1`;
        client.query(query3, [user_id], (err3, result3) => {
          if (err3) {
            console.log("Error in query3:", err3);
            res.status(500).json({ error: "Internal server error" });
            return;
          }

          const today = new Date();
          const date = today.toLocaleDateString(0, 10);
          const query4 = `INSERT INTO contributions (user_id, story_id, date_contributed) VALUES ($1, $2, $3)`;
          const values = [user_id, story_id, date];
          client.query(query4, values, (err4, result4) => {
            if (err4) {
              console.log("Error in query4:", err4);
              res.status(500).json({ error: "Internal server error" });
              return;
            }

            console.log(result4);
            res.status(200).json({ message: "Story updated successfully" });
          });
        });
      }
    );
  });
});

router.get("/story/contributions/:user_id",(req, res) => {
    const {user_id} = req.params
    const query = `select count(*) as contributions from contributions where user_id = ${user_id}`
    client.query(query, (err, result) => {
        if(!err){
            // console.log(result.rows[0].contributions);
            res.send(result.rows[0].contributions)
        }
        else{
            console.log(err);
        }
    })
})

module.exports = router;
