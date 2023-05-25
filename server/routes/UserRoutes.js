const router = require('express').Router();
const UserModel = require('../models/Users')
const nodemailer = require('nodemailer');
const emailTemplate = require('../models/Email');
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

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ieicrmailer@gmail.com", 
      pass: "wtcgzswfsvihigoi",
    },
  });


router.post("/sendPassword", async (req,res) => {
    
    const result = await UserModel.find({ email: req.body.email })
    

    if (result[0] !== undefined){
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Request-Method', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Expose-Headers', 'Content-Type');
        let info = transporter.sendMail({
            from: '"Instituto de Educación Integral" <ieinubes@example.com>', 
            to: req.body.email, 
            subject: "Recuperación de datos", 
            html: emailTemplate(req.body.email, result[0].name, result[0].password),
        });
        res.json({"message":"Su información fue enviada exitosamente. "})
    
    }
    else{
        res.json({"message":"La dirección electrónica no pertenece a ningun usuario registrado. "})
        
    }

})


module.exports = router;