const express = require('express')
const router = express.Router()
const client = require('../config/connection')

router.get("/", (req, res) => {
    res.send("Home Page")
})

module.exports = router