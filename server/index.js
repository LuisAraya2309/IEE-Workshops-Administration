const express = require("express"),
      app = express(),
      mongoose = require('mongoose'),
      cors = require('cors'),
      config = require('./config.js')
      PORT = config.PORT,

      // Router import
      usersRouter = require('./routes/UserRoutes'),
      workshopsRouter = require('./routes/WorkshopsRoutes'),
      formsRouter = require('./routes/FormRoutes'),

app.use(express.json())
app.use(cors())

// Router prefixes
app.use('/users', usersRouter)
app.use('/workshops', workshopsRouter)
app.use('/forms', formsRouter)

mongoose.connect(
    config.HOST
);

app.listen(PORT,()=>{
    console.log(`Servers Runs at port ${PORT}`)
});