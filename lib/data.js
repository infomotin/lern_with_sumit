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
lib.update = function (dir, file, data, callback) {
    _fs.open(lib.baseDir + dir + "/" + file + ".json", "r+", function (err, fileDescriptor) {
        if (!err && fileDescriptor) {
        const stringData = JSON.stringify(data);
        _fs.truncate(fileDescriptor, function (err) {
            if (!err) {
            _fs.writeFile(fileDescriptor, stringData, function (err) {
                if (!err) {
                _fs.close(fileDescriptor, function (err) {
                    if (!err) {
                    callback(false);
                    } else {
                    callback(err, "Error closing existing file");
                    }
                });
                } else {
                callback(err, "Error writing to existing file");
                }
            });
            } else {
            callback(err, "Error truncating file");
            }
        });
        } else {
        callback(err, "Could not open file for updating, it may not exist yet");
        }
    } );
}
lib.delete = function (dir, file, callback) { 
    _fs.unlink(lib.baseDir + dir + "/" + file + ".json", function (err) {
        if (!err) {
        callback(false);
        } else {
        callback(err);
        }
    } );
}
module.exports = lib;