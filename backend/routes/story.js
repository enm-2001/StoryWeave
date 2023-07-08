const express = require('express')
const router = express.Router()
const client = require('../config/connection')

router.post("/story/create", (req, res) => {
    const {user_id} = req.body
    const { title, description } = req.body.story
    // console.log(title);
    const today = new Date();
    const date = today.toLocaleDateString(0,10)
    const query = `insert into story(title,description,creator,date_created) values('${title}','${description}','${user_id}','${date}');`
    client.query(query, (err, result) => {
        if(!err){
            res.send("insertion complete")
        }
        else{
            console.log("err in story: ",err);
        }
    })
})

router.delete("/story/delete", (req, res) =>{
    const { story_id} = req.body
    const query = `delete from story where story_id = ${story_id}`
    client.query(query, (err, result) => {
        if(!err){
            res.send("deleted")
        }
        else{
            console.log(err);
        }
    })
})

router.put("/story/update", (req, res) => {
    const {story_id, des} = req.body
    console.log(story_id);
    const query1 = `select description from story where story_id = ${story_id}`
    client.query(query1, (err, result) => {
        if(!err){
            // console.log(result.rows[0]);
            console.log(result.rows[0]);
            let {description} = result.rows[0]
            description = description + ' ' + des
            console.log(description);
            const query = `update story set description = '${description}' where story_id = ${story_id}`
            client.query(query, (err2, result2) => {
                if(!err){
                    res.send(result2)
                }
                else{
                    console.log("err in update: ",err2);
                }
            })
        }
    })
})
module.exports = router