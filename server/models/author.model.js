const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    fName: {
        type: String,
        required: [true, 'Please provide a first name!'],
        minlength: [2, 'First name must be two characters or longer.' ]
    },
    lName: {
        type: String,
        required: [true, 'Please provide a last name!'],
        minlength: [2, 'Last name must be two characters or longer.' ]
    }},
    {timesstamps: true});

module.exports= mongoose.model('Author', AuthorSchema);