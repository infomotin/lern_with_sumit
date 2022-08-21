const { smapleHandler } = require("./handlers/routeHandlers/sampleHendler");
const { notFoundHandler } = require("./handlers/routeHandlers/notFoundHandler");
const { userHandler } = require("./handlers/routeHandlers/userHandler");

// const routes = {}
const routes = {
  sample: smapleHandler,
  notFound: notFoundHandler,
  user: userHandler,
};


module.exports = routes;