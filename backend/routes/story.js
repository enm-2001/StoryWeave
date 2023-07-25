import express from "express";
const router = express.Router();
import client from "../config/connection.js";
import { authenticateToken } from "../middlewares/checkAuth.js";
import { pipeline } from '@xenova/transformers'
// import {sentimentAnalysis} = require('./sentiment.mjs')

// router.post("/getSentiment", sentimentAnalysis)
router.post("/getSentiment", async (req, res) => {
    const {des} = req.body
    let classifier =  await pipeline('sentiment-analysis');
    let result =  await classifier(des);
    res.send(result)
})

router.post("/story/create", authenticateToken, async (req, res) => {
  try {
    const { user_id } = req.body;
    const { title, description } = req.body.story;
    console.log(req.body.story);
    // console.log(title);
    const today = new Date();

    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const date = `${day}/${month}/${year}`;

    console.log(date);

    // const query = `INSERT INTO story (title, description, creator, date_created, completedstory) VALUES ('${title}', '${description}', '${user_id}', '${date}', 0) returning story_id`;
    const query =
      "INSERT INTO story (title, description, creator, date_created, completedstory) VALUES ($1, $2, $3, $4, $5) returning story_id";
    const values = [title, description, user_id, date, 0];

    const result = await client.query(query, values);

    const story_id = result.rows[0].story_id;

    const query2 = `UPDATE users SET coins = coins + 15 WHERE user_id = ${user_id}`;
    await client.query(query2, (err2, result2) => {
      if (err2) {
        console.log(err2);
        return res.send("Server error 2");
      }
    });

    const query3 = `insert into contributions(user_id, story_id, date_contributed, description) values($1, $2, $3, $4)`;
    const values3 = [user_id, story_id, date, description];
    await client.query(query3, values3, (err3, result3) => {
      if (err3) {
        console.log(err3);
        return res.send("Server error 3");
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

router.post("/story/add", authenticateToken, (req, res) => {
  const { story_id, des, user_id, completedstory } = req.body;
  const query = `insert into pending_contr(story_id, des, user_id, completedstory) values($1, $2, $3, $4)`;
  const values = [story_id, des, user_id, completedstory];
  client.query(query, values, (err, result) => {
    if (!err) {
      res.send("inserted data");
    }
  });
});

//get pending stories for particular user
router.get("/story/pstory/:user_id", authenticateToken, (req, res) => {
  const { user_id } = req.params;
  const query = `select p.*, s.title from story s
  join pending_contr p on p.story_id = s.story_id
  where s.creator = ${user_id}`
  // pending_contr where story_id in(select story_id from story where creator = ${user_id})`;
  client.query(query, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
});

//remove from pending list after rejection
router.delete("/story/:pstory_id/delete", authenticateToken, (req, res) => {
  const { pstory_id } = req.params;
  const query = `delete from pending_contr where id = ${pstory_id}`;
  client.query(query, (err, result) => {
    if (!err) {
      res.send("deletion successful");
    }
  });
});

//update the story after acceptance
router.put("/story/update", authenticateToken, (req, res) => {
  const { story_id, des, user_id, pstory_id, completedstory } = req.body;
  const query1 = `SELECT description FROM story WHERE story_id = $1`;
  client.query(query1, [story_id], (err, result) => {
    if (err) {
      console.log("Error in query1:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    const { description } = result.rows[0];
    const updatedDescription = description + " " + des;
    const query2 = `UPDATE story SET description = $1, last_updated = $2, completedstory = $3 WHERE story_id = $4`;
    client.query(
      query2,
      [updatedDescription, user_id, completedstory, story_id],
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
          const day = today.getDate() + 1;
          const month = today.getMonth() + 1;
          const year = today.getFullYear();

          const date = `${day}/${month}/${year}`;
          const query4 = `INSERT INTO contributions (user_id, story_id, date_contributed, description) VALUES ($1, $2, $3, $4)`;
          const values = [user_id, story_id, date, des];
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

//get accepted stories notification
router.get("/story/acceptedStories/:user_id", authenticateToken, (req, res) => {
  const { user_id } = req.params;
  const query = `select c.contr_id, s.title from story s 
  join contributions c on s.story_id = c.story_id
  where s.creator != ${user_id} and c.user_id = ${user_id}`;

  client.query(query, (err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      console.log("err getting notification: ", err);
    }
  });
});

//stories contributed
router.get("/story/contributions/:user_id", authenticateToken, (req, res) => {
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

//get completed stories
router.get("/story/completed/readstory", async (req, res) => {

  const query = `SELECT s.story_id, s.title, u.username as creator, c.description as des
    FROM story s
    JOIN users u ON u.user_id = s.creator
    JOIN (
      SELECT story_id, MIN(contr_id) AS min_contr_id
      FROM contributions
      GROUP BY story_id
    ) AS min_contr ON min_contr.story_id = s.story_id
    JOIN contributions c ON c.story_id = min_contr.story_id AND c.contr_id = min_contr.min_contr_id
    WHERE s.completedstory = 1`;

  await client.query(query, (err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      console.log(err);
    }
  });
});

//get uncompleted stories
router.get("/story/uncompleted/writestory", async (req, res) => {
  const query = `SELECT s.story_id, s.title, u.username as creator, c.description as des, u2.username as last_line_contributor
    FROM story s
    JOIN users u ON u.user_id = s.creator
    JOIN (
      SELECT story_id, MAX(contr_id) AS max_contr_id
      FROM contributions
      GROUP BY story_id
    ) AS max_contr ON max_contr.story_id = s.story_id
    JOIN contributions c ON c.story_id = max_contr.story_id AND c.contr_id = max_contr.max_contr_id
    JOIN users u2 ON u2.user_id = c.user_id
    WHERE s.completedstory = 0`;

  await client.query(query, (err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      console.log(err);
    }
  });
});

//update story status as completed
router.put("/story/completed/:story_id", async (req, res) => {
  const { story_id } = req.params;
  const query = `update story set completedStory = 1 where story_id = ${story_id}`;
  await client.query(query, (err, result) => {
    if (!err) {
      res.send("update successful");
    } else {
      console.log("err in update status: ", err);
    }
  });
});

//read full story
router.get("/readstory/:storyId", async (req, res) => {
  const { storyId } = req.params;

  const query1 = `select s.title, u.username from story s 
  join users u on u.user_id = s.creator where story_id = ${storyId}`;
  const result1 = await client.query(query1);
  const story_details = result1.rows[0];

  const query2 = `select c.contr_id, TO_CHAR(date_contributed, 'DD/MM/YYYY') as date_contributed, c.description, u.username from story s
  join contributions c on s.story_id = c.story_id
  join users u on c.user_id = u.user_id
  where s.story_id = ${storyId}
  order by c.contr_id asc`;

  const result2 = await client.query(query2);
  const story_others = result2.rows;

  for(let i = 0; i<story_others.length; i++){
    let classifier =  await pipeline('sentiment-analysis');
    let result =  await classifier(story_others[i].description);
    story_others[i] = {...story_others[i], sentiment : result[0].label}
  }
  const response = {
    story_details,
    story_others,
  };

  res.send(response);
});


export default router;
