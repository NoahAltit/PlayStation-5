const games = require("./data/games.json");

const getGames = async (req, res) => {
  try {
    res.status(200).json({ status: 200, data: games });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Server error" });
    console.log(err);
  }
};

module.exports = { getGames };
