const express = require('express');
const router = express.Router();

router.get('/student', (req,res,next)=>{
    res.render('pages/home')
})

module.exports = router;