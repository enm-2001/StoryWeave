const jwt = require('jsonwebtoken')
require('dotenv').config()

function authenticateToken(req, res, next) {

    const authToken = req.headers.authorization;
    const token = authToken && authToken.split(' ')[1]
    // console.log(token);
  
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    // console.log(token)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        // console.log(err)
        console.log("HEllo error")
        return res.status(403).json({ message: 'Invalid token' });
      }
  
      req.user = user;
      next();
    });
  }

  module.exports = {
    authenticateToken,
  };