const mongoose = require('mongoose');
const schema = mongoose.Schema({
    topic: String,
    userName: String,
    verified: {type: Boolean, defaultValue: false},
    handle: String,
    post: String,
    time: String,
    "avatar-image": String
}, {collection: "posts"});
module.exports = schema;
