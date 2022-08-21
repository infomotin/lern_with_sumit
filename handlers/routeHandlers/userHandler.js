const data  = require('../../lib/data');
const handle = {};
handle.userHandler = function (requestPropertice, callback) {

//as good programmer we should use try catch block to handle error
    const acceptibleMethods = ["post", "get", "put", "delete"];
    if (acceptibleMethods.indexOf(requestPropertice.method) > -1) { 
        handle._users[requestPropertice.method](requestPropertice, callback);
    }
    
    else { 
        callback(405, {
            message: "method not allowed"
        });
        return;
    }
//create saparate function to handle post request for user data
    handle._users = {}
    handle._users.post = function (requestPropertice, callback) {
        const firstName =typeof(requestPropertice.body.firstName) === "string" && requestPropertice.body.firstName.trim().length >0 ? requestPropertice.body.firstName: false;
        const lastName = typeof requestPropertice.body.lastName === "string" && requestPropertice.body.lastName.trim().length > 0 ? requestPropertice.body.lastName : false;
        const phone = typeof requestPropertice.body.phone === "string" && requestPropertice.body.phone.trim().length > 0 ? requestPropertice.body.phone : false;
        const password = typeof requestPropertice.body.password === "string" && requestPropertice.body.password.trim().length > 0 ? requestPropertice.body.password : false;
        const tosAgreement = typeof requestPropertice.body.tosAgreement === "boolean" && requestPropertice.body.tosAgreement === true ? true : false;
        if (firstName && lastName && phone && password && tosAgreement) { 
            
            //if data exist then create new user
            data.read('users', phone, function (err, data) {
                if (err) {
                    const userData = {
                        firstName: firstName,
                        lastName: lastName,
                        phone: phone,
                        password: password,
                        tosAgreement: true
                        
                    };
                }
                else { 
                    callback(400, {
                        message: "user already exist"
                    });
                    
                }
             });
            
            
            
            
            
            
            
            
            
        }
        else {
            callback(400, {
                message: "missing required fields"
            });  
        }
        
    };
    handle._users.get = function (requestPropertice, callback) { 
        callback(200, {
            message: "well come user Page",
        });
    }
    handle._users.put = function (requestPropertice, callback) { 
        return;
    }
    handle._users.delete = function (requestPropertice, callback) {
        return;
    }
     

//simple way to get the query string
    // const reqMethod = requestPropertice.method;
    // console.log(reqMethod);
    // if (reqMethod.toLowerCase() === "get") { 
    //     // console.log(requestPropertice);
    //     callback(200, {
    //         message: "get method are working",
    //     });
    // } else if (reqMethod.toLowerCase() === "post") {
    //     callback(200, {
    //         message: "post method are working",
    //     });
    
    // }
    // else if (reqMethod.toLowerCase() === "put") {
    //   callback(200, {
    //     message: "put method are working",
    //   });
    // } else if (reqMethod.toLowerCase() === "delete") {
    //   callback(200, {
    //     message: "delete method are working",
    //   });
    // } else {
    //   callback(405, {
    //     message: "method not allowed",
    //   });
    // }
};
module.exports = handle;
