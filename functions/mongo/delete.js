
//// require connection declared as variable ////
const connVars = require('./conn');


connVars.varFiles.var1();


const Fruit = connVars.varFiles.mongoose.model ("fruit",connVars.varFiles.fruitSchema);
 
////DELETE ONE//////
Fruit.deleteOne({name:'peer'}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log('successfully deleted the document');
    }
}); 


////DELETE MANY//////
Fruit.deleteMany({name:'mango'}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log('successfully deleted many document');
    }
}); 


