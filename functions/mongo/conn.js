let mongoose = require("mongoose")
let env = require('dotenv').config()


module.exports = function(mongoose) {
  const username = encodeURIComponent(env.MONGOUSERNAME);
  const password = encodeURIComponent(env.MONGOPASSWORD);
  const dbName =  encodeURIComponent(env.MONGODBNAME);

  const dbLink = "mongodb://127.0.0.1:27017/contentDB"; /////    Database Name
  const dbLinkOnline = `mongodb+srv://${username}:${password}@cluster0.t13ub.mongodb.net/${dbName}`; /////    Database Name
   mongoose.set("strictQuery", false)
   mongoose.connect( dbLink )
}