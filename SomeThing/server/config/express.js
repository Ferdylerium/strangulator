var express = require("express");

module.exports = function(app, config){
   
      app.set('views', config.rootPath + '/server/views');
      app.set('view engine', 'jade');
     /* app.use(express.logger('dev'));
      app.use(express.cookieParser());
      app.use(express.bodyParser());
      app.use(express.session({secret: "multi vision unicorns"}));
      app.use(express.static(config.rootPath + '/public'));*/
   
}