const express = require('express');
const router = express.Router();

router.get('/student', (req,res,next)=>{
    res.json('Made First Request...')
})

module.exports = router;