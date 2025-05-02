const express = require("express");
const { getTopics } = require("../app/controller");

const topicsRouter = express.Router();

topicsRouter.get("/", getTopics);

module.exports = topicsRouter;