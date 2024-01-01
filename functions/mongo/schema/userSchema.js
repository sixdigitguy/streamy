/////   REQUIRE CONNECTION
const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

	///////////////////////////////////////////   CREATE SCHEMA   //////////////////////////////////////////////

const userSchema = new mongoose.Schema({
	active: Boolean,
	username :                        {type:String, required:[true,'user must have a firstname'], minlength:5, maxlength:20, },
	email :                           {type:String, lowercase:true, required:[true,'user must have a firstname'], minlength:7, maxlength:40, },
	password :                        {type:String, required:[true,'user must have a firstname'], minlength:9, maxlength:40, },
	favorites:                        {type:Array, required:[false,'user must have a firstname']},
});


userSchema.plugin( encrypt, { secret : process.env.SECRET , encryptedFields: ['password'] } ) ;
userSchema.plugin( passportLocalMongoose ) ;
userSchema.plugin( passportLocalMongoose, {usernameField: "username" } ) ;



module.exports = mongoose.model( "User", userSchema );
