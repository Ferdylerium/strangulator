var mongoose = require("mongoose");

module.exports = function(config){
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
      console.log('db opened');
    });
    
    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String
    });
    
    var User = mongoose.model("User", userSchema);
    
    User.find({}).exec(function(err, collection){
       if(collection.length === 0){
           User.create({
               firstName: "Ferdinand",
               lastName: "Ribbink",
               username: "fribbink"
           });
           User.create({
               firstName: "Storm",
               lastName: "Ribbink",
               username: "stribbink"
           });
           User.create({
               firstName: "Marleen",
               lastName: "Ribbink",
               username: "mribbink"
           });
           User.create({
               firstName: "Julie",
               lastName: "Ribbink",
               username: "jbribbink"
           });
       }
    });
};