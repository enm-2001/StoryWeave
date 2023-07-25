import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import usersRoutes from "./routes/users.js";
import storyRoutes from "./routes/story.js";

//const path = require

const app = express();
app.use(cors());
app.use(cookieParser())
app.use(express.json());

app.use("/api", usersRoutes);
app.use("/api", storyRoutes);


app.listen(5000, () => {
  console.log("Server running on port 5000....");
});
