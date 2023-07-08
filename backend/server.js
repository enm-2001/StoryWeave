const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors")
//const path = require

const app = express();
app.use(cors())

app.use(express.json())

app.use('/api', require('./routes/users.js'));
app.use('/api', require('./routes/home.js'));
app.use('/api', require('./routes/story.js'));

app.listen(5000, () => {
    console.log("Server running on port 5000....");
})