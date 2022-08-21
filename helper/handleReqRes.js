const _url = require("url");
const { StringDecoder } = require("string_decoder");
const routers = require("../routes");
const {notFoundHandler,} = require("../handlers/routeHandlers/notFoundHandler");
const handler = {};
handler.handleReqRes = function handleReqRes(req, res) {
  const parseUrl = _url.parse(req.url, true);
  const pathName = parseUrl.pathname;
  const treamPath = pathName.replace(/^\/+|\/+$/g, "");
  console.log(treamPath);
  const queryString = parseUrl.query;
  const method = req.method.toLowerCase();
  const headers = req.headers;
  //colect request properties
  const requestPropertice = {
    parseUrl,
    pathName,
    treamPath,
    queryString,
    method,
    headers,
  };
  const decoder = new StringDecoder("utf-8");
  let parseData = "";
  //check tramp path and call the handler
  // console.log(routers);
  const chosePath = routers[treamPath] ? routers[treamPath] : notFoundHandler;
  // create decoder object
  req.on("data", (data) => {
    // console.log(data.toString());
    parseData += decoder.write(data);
  });
  req.on("end", () => {
    parseData += decoder.end();
    chosePath(requestPropertice, (statusCode, payload) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payload = typeof payload === "object" ? payload : {};
      const payloadString = JSON.stringify(payload);
      //return response
      res.writeHead(statusCode);
      res.end(payloadString);
    });
    res.end("well come Single Page Application");
  });
  // console.log(queryString);
  // console.log(headers);
  // create response
};
module.exports = handler;
