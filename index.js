// create multiple comments

const _http = require("http");

const { handleReqRes } = require("./helper/handleReqRes");
const environments = require("./helper/environments");
const data = require("./lib/data");

const app = {};
// create data file
// data.create(
//   "test",
//   "newFile",
//   { "name": "Banglasesh", "language": "Bangla" },
//   (err) => {
//     if (!err) {
//       console.log("file created");
//     } else {
//       console.log(err);
//     }
//   }
// );

// update file 
data.update("test", "newFile", { "name": "Motin", "language": "Bangla" }, (err) => {
  if (!err) {
    console.log("file updated");
  } else {
    console.log(err);
  }
});
// data read data file

data.read("test", "newFile", (err, data) => { 
    if (!err && data) {
    console.log(data);
    } else {
    console.log(err);
    }
});
// create server
app.createServer = function createServer() {
  const server = _http.createServer(app.handleReqRes);
  //set listen port
  server.listen(environments.port, () => {
    // console.log(`environment variable ${process.env.NODE_ENV}`);
    console.log(`server is running on port ${environments.port}`);
  });
};
//request and response handler
app.handleReqRes = handleReqRes;
// create server
app.createServer();
