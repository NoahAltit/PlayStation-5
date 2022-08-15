const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);

const db = client.db("PStation");

const getGames = async (req, res) => {
  try {
    await client.connect();

    const games = await db.collection("Games").find().toArray();

    res.status(200).json({ status: 200, data: games });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: "Server error" });
  }
  client.close();
};

const getMedia = async (req, res) => {
  try {
    await client.connect();

    const media = await db.collection("Media").find().toArray();

    res.status(200).json({ status: 200, data: media });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: "Server error" });
  }
  client.close();
};

module.exports = { getGames, getMedia };
