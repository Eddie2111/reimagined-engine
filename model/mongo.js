const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://eddie2111:bmwM3GTR.@cluster0.yql3v.mongodb.net/roboway")
    .then(()=>console.log('mongo → 200'))
    .catch((err)=>console.log(err));

module.exports = mongoose;
