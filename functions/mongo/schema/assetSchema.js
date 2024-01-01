/////   REQUIRE CONNECTION
const mongoose = require('mongoose');

	///////////////////////////////////////////   CREATE SCHEMA   //////////////////////////////////////////////

const assetSchema = new mongoose.Schema({
	title : 			{      type: String, required : {true : " NAME " }         } ,
	description : 			{      type: String, required : {true : " BRIEF DESCRIPTION " }         } ,
	cost :				{      type: Number, required : {true : " COST IN DOLLARS " }         } ,
	url : 			{      type: String, required : {true : " ONLINE LINK " }         } ,
	size :				{      type: Number, required : {true : " ESTIMATED FILE SIZE " }         } ,
	tags :				{      type: String, required : {true : " ALL TAGS FOR THE CONTENT " }         } ,
	nsfw: 					{      type: Boolean         } ,
	thumbnailPotrait : 			{      type: String, required : {true : " YOU NEED A THUMBNAIL " }         } ,
	thumbnailLandscape : 			{      type: String, required : {true : " YOU NEED ANOTHER THUMBNAIL " }         } ,
	date :                 			{      type: Date, required : {false : "Date of upload is required" }         } ,
});



module.exports = mongoose.model("Asset", assetSchema);