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

router.get("/getWorkshop", async (req,res) => {
    const result = await WorkshopsModel.find({})   
    res.json(result)    
})
router.post("/deleteWorkshop", async (req,res) => {
    const deleteWorkshop = req.body.workshop,
    result = await WorkshopsModel.deleteOne({"name":deleteWorkshop})
    res.json({"message":"El taller ha sido eliminado exitosamente"})
})
router.post("/editWorkshop", async (req,res) => {
    
    const oldWorkshop = req.body.oldWorkshop,
        newWorkshop = req.body.newWorkshop
        result = await WorkshopsModel.aggregate([{$match:{name:{$eq:newWorkshop}}}])

    if (result[0] === undefined){
        await WorkshopsModel.updateOne({name:oldWorkshop},{$set:{name:newWorkshop}})
        res.json({"message":"Taller actualizado con éxito"})
    }
    else{
        res.json({"message":"Error: Este nombre de taller ya está en uso."})
    }
    
})

module.exports = router;