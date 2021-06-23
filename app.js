const express = require('express');
const app = express();
const path = require('path');
const hbs = require('express-handlebars');
const port = process.env.PORT || 8089;
app.use(express.static('public'));

const student_controller = require('./routes/students-controller');

const staff_controller = require('./routes/staff-controller');
require('./model/staff-model');
require('./model/student-model');
app.listen(port, '0.0.0.0', ()=>{
    console.log(`Server running on port ${port}`)
});
//Setting up view engine: Handlebars


//Setting up Views Engine
app.engine('hbs', hbs({extname:'hbs', defaultLayout: 'MainLayout',  layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, '/views/'));
app.set('view engine', 'hbs');


app.use('/', student_controller)
app.use('/', staff_controller);