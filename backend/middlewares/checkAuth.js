import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authenticateToken = (req, res, next) => {
  const authToken = req.headers.authorization;
  console.log(("aaaa", authToken));
  const token = authToken && authToken.split(" ")[1];
  console.log("tttt: ",token);
  // console.log(token);

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  // console.log(token)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log(err.message)
      console.log(token);
      console.log("HEllo error");
      return res.status(403).json({ message: "Invalid token" });
    }

    req.user = user;
    next();
  });
}
