const express = require("express"),
      app = express(),
      mongoose = require('mongoose'),
      cors = require('cors'),
      config = require('./config.js')
      PORT = config.PORT

app.use(express.json())
app.use(cors())

mongoose.connect(
    config.HOST
);

app.listen(PORT,()=>{
    console.log('Servers Runs')
});