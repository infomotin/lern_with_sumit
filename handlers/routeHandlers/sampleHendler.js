const handle = {};




handle.smapleHandler = function (requestPropertice,callback) {
    console.log(requestPropertice);
    callback(200, {
        "message": "well come sample Page",
    });
};




module.exports = handle;