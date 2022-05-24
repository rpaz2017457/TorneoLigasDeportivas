const express = require("express");
const partidosController = require("../controllers/partidos.controller");

var api = express.Router();

api.post("/asignacionPartidos", partidosController.asignacionPartidos);

module.exports = api;
