// create multiple comments

const _http = require("http");

const {handleReqRes} = require("./helper/handleReqRes");
// import { handleReqRes } from "./helper/handleReqRes";
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
app.handleReqRes = handleReqRes;
// create server
app.createServer();
