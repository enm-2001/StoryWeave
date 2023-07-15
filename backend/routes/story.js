const express = require("express");
const router = express.Router();
const client = require("../config/connection");

// router.post("/story/create", (req, res) => {
//   const { user_id } = req.body;
//   const { title, description } = req.body.story;
//   // console.log(title);
//   const today = new Date();
//   const date = today.getDate();
//   console.log(date);
//   const query = `insert into story(title,description,creator,date_created) values('${title}','${description}','${user_id}','${date}');`;
//   client.query(query, (err, result) => {
//     if (!err) {
//       const query2 = `update users set coins = coins + 15 where user_id = ${user_id}`;
//       client.query(query2, (err, result2) => {
//         if (!err) {
//           res.send("insertion of story complete");
//         } else {
//           console.log(err);
//         }
//       });
//     } else {
//       console.log("err in story: ", err);
//     }
//   });
// });

router.post("/story/create", async (req, res) => {
  try {
    const { user_id } = req.body;
    const { title, description } = req.body.story;
    // console.log(title);
    const today = new Date();

    const day = today.getDate();
    const month = today.getMonth() + 1; 
    const year = today.getFullYear();


    const date = `${day}/${month}/${year}`;

    console.log(date);
    const query = `INSERT INTO story (title, description, creator, date_created) VALUES ('${title}', '${description}', '${user_id}', '${date}')`;
    await client.query(query, (err1, result) => {
      if (err1) {
        console.log(err1);
        return res.send("Server error");
      }
    });

    const query2 = `UPDATE users SET coins = coins + 15 WHERE user_id = ${user_id}`;
    await client.query(query2, (err2, result2) => {
      if (err2) {
        console.log(err2);
        return res.send("Server error");
      }
    });

    res.send("Insertion of story complete");
  } catch (err) {
    console.log("Error in story creation: ", err);
    res.status(500).send("An error occurred during story creation");
  }
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

router.post("/story/add", (req, res) => {
  const { story_id, des, user_id } = req.body;
  const query = `insert into pending_contr(story_id, des, user_id) values($1, $2, $3)`;
  const values = [story_id, des, user_id];
  client.query(query, values, (err, result) => {
    if (!err) {
      res.send("inserted data");
    }
  });
});

//get pending stories for particular user
router.get("/story/pstory/:user_id", (req, res) => {
  const { user_id } = req.params;
  const query = `select * from pending_contr where story_id in(select story_id from story where creator = ${user_id})`;
  client.query(query, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
});

//remove from pending list after rejection
router.delete("/story/:pstory_id/delete", (req, res) => {
  const { pstory_id } = req.params;
  const query = `delete from pending_contr where id = ${pstory_id}`;
  client.query(query, (err, result) => {
    if (!err) {
      res.send("deletion successful");
    }
  });
});

//update the story after acceptance
router.put("/story/update", (req, res) => {
  const { story_id, des, user_id, pstory_id } = req.body;
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
          const day = today.getDate();
          const month = today.getMonth() + 1; 
          const year = today.getFullYear();


          const date = `${day}/${month}/${year}`;
          const query4 = `INSERT INTO contributions (user_id, story_id, date_contributed) VALUES ($1, $2, $3)`;
          const values = [user_id, story_id, date];
          client.query(query4, values, (err4, result4) => {
            if (err4) {
              console.log("Error in query4:", err4);
              res.status(500).json({ error: "Internal server error" });
              return;
            }

            const query5 = `delete from pending_contr where id = ${pstory_id}`;
            client.query(query5, (err5, result5) => {
              if (err5) {
                console.log("Error in query5:", err5);
                res.status(500).json({ error: "Internal server error" });
                return;
              }
            });
            console.log(result4);
            res.status(200).json({ message: "Story updated successfully" });
          });
        });
      }
    );
  });
});

router.get("/story/contributions/:user_id", (req, res) => {
  const { user_id } = req.params;
  const query = `select count(*) as contributions from contributions where user_id = ${user_id}`;
  client.query(query, (err, result) => {
    if (!err) {
      // console.log(result.rows[0].contributions);
      res.send(result.rows[0].contributions);
    } else {
      console.log(err);
    }
  });
});


// router.get("/story/contributions/:user_id")

module.exports = router;
