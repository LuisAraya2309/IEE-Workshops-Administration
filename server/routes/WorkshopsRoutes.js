const router = require('express').Router();
const WorkshopsModel = require('../models/Workshops')
//Login page

router.post("/",async(req,res)=>{

})

router.post("/addWorkshop", async (req,res) => {
    const newWorkshop = req.body.workshop,
    result = await WorkshopsModel.aggregate([{$match:{name:{$eq:newWorkshop}}}])
// console.log(result)
if (result[0] === undefined){
    await WorkshopsModel.insertMany({name:newWorkshop})
    res.json({"message":"Taller ingresado con éxito"})
}
else{
    res.json({"message":"Error: Este nombre de taller ya está en uso."})
}
    
})

module.exports = router;