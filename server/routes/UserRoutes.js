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

router.post("/addUser", async (req,res) => {
    const newEmail = req.body.userEmail,
    result = await UserModel.aggregate([{$match:{email:{$eq:newEmail}}}])

if (result[0] === undefined){
    await UserModel.insertMany({email: newEmail, name:req.body.name, password: req.body.password})
    res.json({"message":`El usuario ${req.body.name} se registro exitosamente `})
}
else{
    res.json({"message":"Error: El correo electrónico corresponde al de un usuario vigente."})
}
    
})

router.get("/getUsers", async (req,res) => {
    const result = await UserModel.find({})   
    res.json(result)    
})

router.post("/deleteUser", async (req,res) => {
    const deleteUser = req.body.email,
    result = await UserModel.deleteOne({"email":deleteUser})
    res.json({"message":`El usuario ${req.body.name} fue eliminado `})
})

router.post("/editUser", async (req,res) => {
    
    const userEmail = req.body.userEmail,
        result = await UserModel.aggregate([{$match:{email:{$eq:userEmail}}}])

    if (result[0] !== undefined){
        await UserModel.updateOne({email:userEmail},{$set:{password: req.body.password , name: req.body.name}})
        res.json({"message":"Se modificaron los datos exitosamente"})
    }
    else{
        res.json({"message":"Error: El correo electrónico no corresponde al de ningún usuario. "})
    }
    
})


module.exports = router;