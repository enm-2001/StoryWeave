const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors")
//const path = require

const app = express();
app.use(cors())


app.get('/',(req, res) => {
    res.send("Home Page")
})

app.listen(5000, () => {
    console.log("Server running on port 5000....");
})