/////   REQUIRE CONNECTION
const mongoose = require('mongoose');

	///////////////////////////////////////////   CREATE SCHEMA   //////////////////////////////////////////////

const imageSchema = new mongoose.Schema({
	title : 			{      type: String, required : {true : " NAME " }         } ,
	description : 			{      type: String         } ,
	cost :				{      type: Number, required : {true : " COST IN DOLLARS " }         } ,
	size :				{      type: Number, required : {true : " ESTIMATED FILE SIZE " }         } ,
	tags :				{      type: String, required : {true : " ALL TAGS FOR THE CONTENT " }         } ,
	nsfw: 					{      type: Boolean         } ,
	thumbnailPotrait : 			{      type: String, required : {true : " ONLINE LINK " }    } ,
	thumbnailLandscape : 			{      type: String     } ,
});



module.exports = mongoose.model("Image", imageSchema);