const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

// Create a write stream for logging to 'access.log' file with append mode ('a')
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

// Corrected the key from 'steam' to 'stream'
const logger = morgan("combined", { stream: accessLogStream });

module.exports = logger;

// morgan is a external middleware and it use to log the data of requets of the usersite
// i use this data to refrance as debugging when server is crash 
// this feature i was not deploy in sever because server want premium membership

