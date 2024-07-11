const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        //email validation
        validate: {
            validator: function(v) {
              // Regular expression to validate email
              return /\S+@\S+\.\S+/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
          }
        },
    password: {
        type: String,
        required: true,
        minlength: 6
        // validate: {
        //     validator: function(v){
        //         return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/.test(v);
        //     },
        //     message: props => `${props.value} is not a secure password`
        // }
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: Number,
        length: [10, 'the number should be 10 digit long'],
        trim: true
    }, 
    address: {
        country: String,
        state: String,
        city: String,
        street: String,
        pincode: Number
    }

})