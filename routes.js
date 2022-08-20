const { smapleHandler } = require("./handlers/routeHandlers/sampleHendler");
const { notFoundHandler } = require("./helper/routeHandler/notFoundHandler");

const routes = {}
router = {
  sample: smapleHandler,
  notFound: notFoundHandler,
};


module.exports = routes;