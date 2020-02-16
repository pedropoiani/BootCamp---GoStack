const { Router } = require("express");

const routes = new Router();

routes.get("/", (res, req) => {
  return res.json({ message: "Hello World" });
});

module.exports = routes;
