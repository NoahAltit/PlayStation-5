const games = require("./data/games.json");
const media = require("./data/media.json");

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);
const db = client.db("PS5");

const batchImport = async () => {
  try {
    await client.connect();
    console.log("Connected");

    // await db.collection("Games").insertMany(games);
    await db.collection("Media").insertMany(media);
  } catch (err) {
    console.log(err);
  }
  client.close();
  console.log("Disconnected");
};
batchImport();
