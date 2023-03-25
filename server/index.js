const express = require("express"),
      app = express(),
      mongoose = require('mongoose'),
      cors = require('cors'),
      config = require('./config.js')
      PORT = config.PORT,

      // Router import
      usersRouter = require('./routes/UserRoutes')

app.use(express.json())
app.use(cors())

// Router prefixes
app.use('/users', usersRouter)

mongoose.connect(
    config.HOST
);

app.listen(PORT,()=>{
    console.log('Servers Runs')
});