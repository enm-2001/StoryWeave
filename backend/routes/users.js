const express = require('express')
const router = express.Router()
const client = require('../config/connection')

router.get('/users',(req, res) => {
    client.query("select * from users", (err, result) => {
        if(!err){
            res.send(result.rows)
        }
    })
    client.close
})

router.post('/signup', (req, res) => {
    const {name, email, password} = req.body;
    const query = `INSERT INTO users (name, email, password)
    VALUES ('${name}', '${email}', '${password}');
    `
    client.query(query, (err, result) => {
        if(!err){
            res.send("insertion completed")
        }
        else{
            console.log("Error: ",err);
        }
    })
})

router.post('/login', (req, res) => {
    const {email, pwd} = req.body;
    const query = `select password from users where email = '${email}'`
    client.query(query, (err, result) => {
        if(!err){
            // console.log(result);
            if(result.rows.length == 0){
                res.send("user does not exist")
            }
            else{
                const {password} = result.rows[0]
            if(password != pwd){
                // console.log(pwd, password);
                res.send("incorrect password")
            }
            else
            res.send("login successful")
            }        
        }
        else{
            console.log("Error: ",err);
        }
    })
})

module.exports = router