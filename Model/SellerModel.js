const mongoose = require('mongoose')
const validator = require('validator')

const SellerSchema = mongoose.Schema({
    gstNumber : {
        type : Number,
        unique : true,
        require : true,
    },

    storeName : {
        type : String,
        trim : true,
        require : true,
    },

    pickUpAddress : {
        type : String,
        require : true
    },

    shippingMethod : {
        type : String,
        //With Easy Ship, you store and pack your orders at your pickup location and Amazon picks and delivers them to your customers. Here, you will be charged additional fees for this service such as weight handling fees & pick and pack fees.
        //With self ship, you store, pack and ship your products yourself or can use third-party services to deliver your products to the customers.
        enum : ['Easy Ship', 'Self Ship'],
        //If you choose Easy ship, you will also have to select the way shipping and delivery charges are paid. You can choose to include delivery charges in the product price itself and offer free delivery to customers. Or you can keep delivery charges and product price separate.
        require : true,
    },

    // BANK ACCOUNT DETAILS 
    tradeName : {
        type : String,
        require : true,
        trim : true,
    },

    legalName : {
        type : String,
        require : true,
        trim : true,
    },

    accountHolderName : {
        type : String,
        require : true,
        trim : true,
    },

    bankAccountNumber : {
        type : Number,
        require : true,
        trim : true,
    },

    ifscCode : {
        type : Number,
        require : true,
        trim : true,
    },

    // DEFAULT TAX RATE
    //Default GST rate or Product Tax Code (PTC) is the tax rate for each category as notified by the government. It is the percentage of taxes which is applicable on the sale of products or services under that category.
    //The default GST rate/ product tax code (PTC) will be used to calculate tax on your product listings where you do not select any tax code.

    defaultTaxRate : {
        type: Number,
        default: 0 // Assuming 0% as the default tax rate

    },

})

const SellerModel = mongoose.model('seller', SellerSchema)

module.exports = {SellerModel}