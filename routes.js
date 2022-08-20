const { smapleHandler } = require("./helper/routeHandler/sampleHandler");
const { notFoundHandler } = require("./helper/routeHandler/notFoundHandler");

const routes = {}
router = {
  sample: smapleHandler,
  notFound: notFoundHandler,
};


module.exports = routes;