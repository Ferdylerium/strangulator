var express = require("express"),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require("./server/config/config")[env];

var app = express();

require("./server/config/express")(app, config);
require("./server/config/routes")(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');