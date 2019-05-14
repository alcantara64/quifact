const mongoose =  require('mongoose');

const InvoiceSchema =  new mongoose.Schema({

    transactionId : String,
    companyName : String,
    issuingCompany:String,
    value: String,
    registrationNumber : Number,
    address : String,
    amountInwords : String,
    postedBy : {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    bidding : [{
       type:mongoose.Schema.Types.ObjectId, ref:'Bidding'
    } ],
    dateIssued:Date,
    purchaseOrder:String,
    imageUrl:String,
    status:{
        type:String, 
        enum : ['pending','active','rejected' ],
        default:'pending'
        },


},
{timestamps:true});

const Invioce = mongoose.model('Invioce',InvoiceSchema);
module.exports = Invioce;