const mongoose = require('mongoose');
const staffSchema = mongoose.Schema({
    Fullname:{
        type: String,
        required: true
    }
});

mongoose.model('Staff', staffSchema);