const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.181.129:27017/noderest', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;


