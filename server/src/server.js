const http = require("http");
const cors = require("cors");
const express = require("express");
const planetRouter = require("./routes/planets/planet.router");
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(planetRouter);
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
