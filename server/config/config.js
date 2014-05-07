var path = require("path");
var rootPath = path.normalize(__dirname + "/../../");
var port = Number(process.env.PORT || 5000);

module.exports={
    development: {
        rootPath: rootPath,
        db: "mongodb://127.3.47.1:27017/multivision",
        port: port
    },
    production: {
        rootPath: rootPath,
        db: "mongodb://usr_****:****33@troup.mongohq.com:10024/meandb",
        port: port
    }
}
