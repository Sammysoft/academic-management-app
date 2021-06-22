const express = require('express');
const router = express.Router();

router.get('/Staff', (req,res,next)=>{
    res.json('Making a request to staff quarters')
});

module.exports = router;