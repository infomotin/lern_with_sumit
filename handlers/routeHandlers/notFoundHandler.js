const handle = {};

handle.notFoundHandler = function (requestPropertice,callback) {
    console.log(requestPropertice);
    callback(404, {
        "message": "404 not found",
    })
};

module.exports = handle;
