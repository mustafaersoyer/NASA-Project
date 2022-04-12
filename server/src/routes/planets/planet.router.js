const express = require("express");

const planetRouter = express.Router();

const { getAllPlanets } = require("./planet.controller");

planetRouter.get("/planets", getAllPlanets);

module.exports = planetRouter;
