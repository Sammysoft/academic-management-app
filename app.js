const express = require('express');
const app = express();
const port = process.env.PORT || 8089;
app.use(express.static('public'));

const student_controller = require('./routes/students-controller');
require('./model/staff-model');
require('./model/student-model');
app.listen(port, '0.0.0.0', ()=>{
    console.log(`Server running on port ${port}`)
});


app.use('/', student_controller)