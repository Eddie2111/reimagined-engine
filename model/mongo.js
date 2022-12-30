const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/test")
    .then(()=>console.log('connected to mongoDB'))
    .catch((err)=>console.log(err));

module.exports = mongoose;
