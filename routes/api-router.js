const express = require("express");
const apiRouter = express.Router();
const topicsRouter = require("./topics.router");
const articlesRouter = require("./articles.router");
const usersRouter = require("./users.router");
const { getEndpoints } = require("../app/controller");

apiRouter.get("/", getEndpoints);
apiRouter.use("/topics", topicsRouter);
apiRouter.use("/articles", articlesRouter);
apiRouter.use("/users", usersRouter);

module.exports = apiRouter;