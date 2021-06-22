const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    Fullname:{
        type: String,
        required: true
    },
    Gender:{
        type: String,
        required: true
    },
    Post:{
        type: String
    },
    Phone:{
        type: Number,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    House:{
        type: String
    },
    Comment:{
        principal:{
            type: String
        },
        master:{
            type: String
        }
    },

});

mongoose.model('Student', studentSchema);