const http = require("http");
const cors = require("cors");
const express = require("express");
const planetRouter = require("./routes/planets/planet.router");
const { loadPlanetsData } = require("./models/planet.model");
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(planetRouter);
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
