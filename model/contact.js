const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const contact = new Schema({
    name: { type: String, default: 'hahaha' },
    phone: { type: String, default: 'hahaha' },
   

});
module.exports=mongoose.model("contact",contact);