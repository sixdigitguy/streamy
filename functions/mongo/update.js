
//// require connection declared as variable ////
const connVars = require('./conn');


connVars.varFiles.var1();


const Fruit = connVars.varFiles.mongoose.model ("fruit",connVars.varFiles.fruitSchema);
 

Fruit.updateOne({_name:'grape'}, {_name:'peer'} function(err){
    if(err){
        console.log(err);
    }else{
        console.log('successfully updated');
    }
}); 