var mongoose =require('mongoose');




var userSchema =mongoose.Schema({

    Make : String,
    Model :String,
    Year : Number,
    Type : String,
    Features : String
});

 

module.exports =mongoose.model('Car',userSchema);
