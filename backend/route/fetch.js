const express = require('express')
const router = express.Router();
const User = require('../model/signup')

router.get('/fetch', async (req,res) => {
    try{

        const user_id = req.signup.id;
        const user = await User.findOne(user_id);

        res.status(200).json({
            succcess: true,
            message : "Done"
        })

    }catch(Error){
        console.log(Error)
    }
})
module.exports = router;