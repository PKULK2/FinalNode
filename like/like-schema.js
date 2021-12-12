const mongoose = require('mongoose');
const schema = mongoose.Schema({
    like: {
        userId: String,
        likedMovies: []
    }
}, {collection: "likes"});
module.exports = schema;