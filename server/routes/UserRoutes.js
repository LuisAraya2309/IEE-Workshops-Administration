const router = require('express').Router();
const UserModel = require('../models/Users')
//Login page

router.post("/",async(req,res)=>{

})

router.post("/login", async (req,res) => {
    const user = {
        "email":req.body.email,
        "password":req.body.password
    }
    const result = await UserModel.aggregate([{$match:{email:{$eq:user.email}}},
        {$match:{password:{$eq:user.password}}}])
    // console.log(result)
    if (result[0] === undefined){
        res.status(404).send('User invalid')
    }
    else{
        res.json(user)
    }
})

module.exports = router;