const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/testinomyData')
const Schema = mongoose.Schema;

var TestinomySchema = new Schema({
    username: String,
    review : String,
    imageUrl : String
});

var testinomydata = mongoose.model('testinomy', TestinomySchema)
module.exports= testinomydata;