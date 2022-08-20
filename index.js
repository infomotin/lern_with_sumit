// create multiple comments

const _http = require("http");
const _url = require("url");  
const {StringDecoder} = require("string_decoder");
// create app scaffole
const app = {};
// create config file
app.config = {
  port: 3001,
};
// create server
app.createServer = function createServer() {
  const server = _http.createServer(app.handleReqRes);
  //set listen port
  server.listen(app.config.port, () => {
    console.log(`server is running on port ${app.config.port}`);
  });
};
//request and response handler
app.handleReqRes = function handleReqRes(req, res) {
  const parseUrl = _url.parse(req.url, true);
  const pathName = parseUrl.pathname;
  const treamPath = pathName.replace(/^\/+|\/+$/g, "");
  const queryString = parseUrl.query;
    const method = req.method.toLowerCase();
    // create decoder object
    const decoder = new StringDecoder("utf-8");
    const parseData = '';
    const headers = req.headers;
    req.on("data", (data) => { 
        console.log(data.toString());
        parseData += decoder.write(data);
    });
    req.on("end", () => {
        parseData += decoder.end();
        console.log(parseData);
    });
 



  console.log(queryString);
    console.log(headers);
    // create response
  res.end("well come Single Page Application");
};
// create server
app.createServer();
