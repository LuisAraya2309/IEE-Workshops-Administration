const { default: mongoose } = require("mongoose");

const FormsSchema = new mongoose.Schema({
    //Form header
    formDate : String,
    teacher : String,
    partner : String,
    participantsAmount : Number,
    participantsList : String,

    //Teacher performance
    teacherPerformance:{
        respectAuthority : Number,
        rulesLimits : Number,
        activeParticipation : Number,
        positiveEnvironment : Number,
        positiveGuidance : Number,
        clearInstructions : Number,
        performanceNotes : String,
    },
    
    //Students Behavioral Performance
    behavioralPerformance:{
        followInstructions : Number,
        respectfulTreat : Number,
        cleanPresentation : Number,
        positiveCoexistence : Number,
        interestParticipation : Number,
        toolCorrectUsage : Number,
        behavioralNotes : String,
    },

    //Students Ocupational Performance
    ocupationalPerformance:{
        technicalFormation : Number,
        topicsMatch: Number,
        ocupationalNotes: String,
    },

    //Soft and social skills
    softSocialSkills:{
        perseverance: Number,
        responsability: Number,
        proactivity: Number,
        workSecurity : Number,
        teamwork : Number,
        positiveActitude : Number,
        valuesWork: Number,
        manifestInterest: Number,
        asertiveCommunication : Number,
        managesFrustration : Number,
        manifestsAutonomy : Number,
        convivence : Number,
        creativity: Number,
        softSkillsNotes: String,

    }


});

const FormsModel = mongoose.model("forms",FormsSchema)
module.exports = FormsModel