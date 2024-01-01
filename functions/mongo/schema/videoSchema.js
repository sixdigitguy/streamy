/////   REQUIRE CONNECTION
const mongoose = require('mongoose');

	///////////////////////////////////////////   CREATE SCHEMA   //////////////////////////////////////////////

const videoSchema = new mongoose.Schema({
	title : 			{      type: String, required : {true : " NAME " }         } ,
	description : 			{      type: String, required : {true : " BRIEF DESCRIPTION " }         } ,
	cost :				{      type: Number, required : {true : " COST IN DOLLARS " }         } ,
	url : 			{      type: String, required : {true : " ONLINE LINK " }         } ,
	size :				{      type: Number, required : {true : " ESTIMATED FILE SIZE " }         } ,
	tags :				{      type: String, required : {true : " ALL TAGS FOR THE CONTENT " }         } ,
	nsfw: 					{      type: Boolean       } ,
	playlist :                    {      type: String, required : {false : "Add if you can" }         } ,
	number :              {      type: Number, required : {false : "Depends on if its in a playlist" }         } ,
	date :                  {      type: Date, required : {false : "Depends on if its in a playlist" }         } ,
	thumbnailPotrait : 			{      type: String, required : {true : " YOU NEED A THUMBNAIL " }         } ,
	thumbnailLandscape : 			{      type: String, required : {true : " YOU NEED ANOTHER THUMBNAIL " }         } ,
});



module.exports = mongoose.model( "Video", videoSchema );