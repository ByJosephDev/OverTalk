const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required : true
    }
    
},
{
    versionKey: false,
    timestamps: true
}
);

module.exports = mongoose.model('user', UserScheme);