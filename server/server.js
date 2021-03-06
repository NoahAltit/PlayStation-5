const express = require("express");
const morgan = require("morgan");

// Added cors to get rid of Error 431
// "Request Header Fields Too Large"
const cors = require("cors");

const app = express();
const PORT = 4000;

const { getGames, getMedia } = require("./handlers");

app
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(cors())
  .use(express.static("./server/assets"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))
  .options("*", cors())

  // Endpoints

  .get("/games", getGames)
  .get("/media", getMedia)

  // Endpoints

  .listen(PORT, () => console.info(`🌎 Listening on port ${PORT}`));
