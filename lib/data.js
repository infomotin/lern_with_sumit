const _fs = require("fs");
const _path = require("path");
const lib = {};

lib.baseDir = _path.join(__dirname, "/../.data/");   

lib.create = function (dir, file, data, callback) {
  _fs.open(
    lib.baseDir + dir + "/" + file + ".json",
    "wx",
    function (err, fileDescriptor) {
      if (!err && fileDescriptor) {
        const stringData = JSON.stringify(data);
        _fs.writeFile(fileDescriptor, stringData, function (err) {
          if (!err) {
            _fs.close(fileDescriptor, function (err) {
              if (!err) {
                callback(false);
              } else {
                callback(err, "Error closing new file");
              }
            });
          } else {
            callback(err, "Error creating new file");
          }
        });
      } else {
        callback(err,"Could not create new file, it may already exist");
      }
    }
  );
};
lib.read = function (dir, file, callback) { 
    _fs.readFile(lib.baseDir + dir + "/" + file + ".json", "utf8", function (err, data) {
        if (!err && data) {
        const parsedData = JSON.parse(data);
        callback(false, parsedData);
        } else {
        callback(err, data);
        }
    } );
}
module.exports = lib;