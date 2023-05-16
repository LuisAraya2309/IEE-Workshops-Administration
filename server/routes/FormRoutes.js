const router = require('express').Router();
const FormsModel = require('../models/Forms')
//Login page

router.post("/",async(req,res)=>{

})

router.post("/submitForm",async(req,res)=>{
    let jsonForm = {
        //Form header
        workShop : req.body.workshop,
        formDate : req.body.formDate,
        teacher : req.body.teacher,
        partner : req.body.partner,
        participantsAmount : req.body.participantsAmount,
        participantsList : req.body.participantsList,
    
        //Teacher performance
        teacherPerformance:{
            clearInstructions : req.body.clearInstructions,
            respectAuthority : req.body.respectAuthority,
            rulesLimits : req.body.rulesLimits,
            activeParticipation : req.body.activeParticipation,
            positiveEnvironment : req.body.positiveEnvironment,
            positiveGuidance : req.body.positiveGuidance,
            performanceNotes : req.body.performanceNotes,
        },
        
        //Students Behavioral Performance
        behavioralPerformance:{
            followInstructions : req.body.followInstructions,
            respectfulTreat : req.body.respectfulTreat,
            cleanPresentation : req.body.cleanPresentation,
            positiveCoexistence : req.body.positiveCoexistence,
            interestParticipation : req.body.interestParticipation,
            toolCorrectUsage : req.body.toolCorrectUsage,
            behavioralNotes : req.body.behavioralNotes,
        },
    
        //Students Ocupational Performance
        ocupationalPerformance:{
            technicalFormation : req.body.technicalFormation,
            topicsMatch: req.body.topicsMatch,
            ocupationalNotes: req.body.ocupationalNotes,
        },
    
        //Soft and social skills
        softSocialSkills:{
            perseverance: req.body.perseverance,
            responsability: req.body.responsability,
            proactivity: req.body.proactivity,
            workSecurity : req.body.workSecurity,
            teamwork : req.body.teamwork,
            positiveActitude : req.body.positiveActitude,
            valuesWork: req.body.valuesWork,
            manifestInterest: req.body.manifestsAutonomy,
            asertiveCommunication : req.body.asertiveCommunication,
            managesFrustration : req.body.managesFrustration,
            manifestsAutonomy : req.body.manifestsAutonomy,
            convivence : req.body.convivence,
            creativity: req.body.creativity,
            softSkillsNotes: req.body.softSkillsNotes
    
        }
        
    }

    await FormsModel.insertMany(jsonForm);
    res.json({"message":"Formulario ingresado exitosamente"})
    
})

module.exports = router;