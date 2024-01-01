/////   REQUIRE CONNECTION
const mongoose = require('mongoose');

	///////////////////////////////////////////   CREATE SCHEMA   //////////////////////////////////////////////

const testSchema = new mongoose.Schema({
	arrayTest : 			{      type: Array, required : {true : " NAME " }         } ,
});



module.exports = mongoose.model("Test", testSchema);