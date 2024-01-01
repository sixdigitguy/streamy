/////   REQUIRE CONNECTION
const mongoose = require('mongoose');

	///////////////////////////////////////////   CREATE SCHEMA   //////////////////////////////////////////////

const comicSchema = new mongoose.Schema({
	title : 						{      type: String, required : {true : " NAME " }         } ,
	description : 					{      type: String, required : {true : " BRIEF DESCRIPTION " }         } ,
	cost :							{      type: Number, required : {true : " COST IN DOLLARS " }         } ,
	tags :							{      type: String, required : {true : " MUST GIVE COIMIC TAGS " }         } ,
	nsfw: 							{      type: Boolean         } ,
	playlist :                    	{      type: String, required : {false : "Add if you can" }         } ,
	num :              			{      type: Number, required : {false : "Depends on if its in a playlist" }         } ,
	date :                 			{      type: Date, required : {false : "Date of upload is required" }         } ,
	thumbnailPotrait : 				{      type: String, required : {true : " YOU NEED A THUMBNAIL " }         } ,
	thumbnailLandscape : 			{      type: String, required : {true : " YOU NEED ANOTHER THUMBNAIL " }         } ,
	pages: 							{      type: String, required : {true : " COMICS NEED PAGES DUH - URLs " }         } ,
});



module.exports = mongoose.model("Comic", comicSchema);