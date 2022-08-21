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



module.exports = utilities;