var mongoose =require('mongoose');




var userSchema =mongoose.Schema({

    Make : String,
    Model :String,
    Year : Number,
    Type : String,
    features : [String]
});

 

module.exports =mongoose.model('Car',userSchema);
