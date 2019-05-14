const mongoose = require('mongoose');

const BiddingSchema =  new mongoose.Schema({
    user: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    amount:Number,
    status: {
        type:String,
        enum:['approved','rejected','pending'],
        default: 'pending',
    }

},{timestamps:true});

const Bidding = mongoose.model("Bidding",BiddingSchema);
module.exports = Bidding;