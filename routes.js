const { smapleHandler } = require("./handlers/routeHandlers/sampleHendler");
const { notFoundHandler } = require("./handlers/routeHandlers/sampleHendler");

// const routes = {}
const routes = {
  sample: smapleHandler,
  notFound: notFoundHandler,
};


module.exports = routes;