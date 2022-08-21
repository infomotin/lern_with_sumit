const _crypto = require('crypto');
const environments = require("./environments");
const utilities = {}

utilities.parseJSON = function (jsonData) {
    let output = {};
    try {
        output = JSON.parse(jsonData);
    }
      catch (e) { 
         output = {};
    }
    return output;
}
//hasing password
utilities.hash = function (string) {
    if (typeof string === 'string' && string.length > 0) {
        const hash = _crypto
          .createHmac("sha256", environments[process.env.NODE_ENV].secretKey)
          .update(string)
          .digest("hex");
    } else {
        return false;
    }
  
};


module.exports = utilities;