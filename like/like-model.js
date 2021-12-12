const mongoose = require('mongoose');
const schema = require('./like-schema');
const model = mongoose.model('LikesModel', schema);
module.exports = model;