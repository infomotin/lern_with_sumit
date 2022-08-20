const _url = require("url");
const { StringDecoder } = require("string_decoder");
const routers = require("../routes");
const { notFoundHandler } = require("../routeHandlers/notFoundHandler");

const handler = {};

handler.handleReqRes = function handleReqRes(req, res) {
  const parseUrl = _url.parse(req.url, true);
  const pathName = parseUrl.pathname;
    const treamPath = pathName.replace(/^\/+|\/+$/g, "");
    
  const queryString = parseUrl.query;
  const method = req.method.toLowerCase();
    //colect request properties
    const requestPropertice = {
      parseUrl,
      pathName,
      treamPath,
      queryString,
      method,
      headers,
    };
    //check tramp path and call the handler
    const chosePath = routers[treamPath] ? routers[treamPath] : notFoundHandler;
    chosePath(requestPropertice, (statusCode, payload) => { });






  // create decoder object
  const decoder = new StringDecoder("utf-8");
  let parseData = "";
  const headers = req.headers;
  req.on("data", (data) => {
    // console.log(data.toString());
    parseData += decoder.write(data);
  });
  req.on("end", () => {
    parseData += decoder.end();
    console.log(parseData);
    res.end("well come Single Page Application");
  });

  // console.log(queryString);
  // console.log(headers);
  // create response
};

module.exports = handler;
