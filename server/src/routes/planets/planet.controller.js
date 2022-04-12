const planets = require("../../models/planet.model");

function getAllPlanets(req, res) {
  res.status(200).json(planets);
}

module.exports = { getAllPlanets };
