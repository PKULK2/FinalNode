const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    userType: String,
    likedMovies: [String],
    profilePic: {

    }
}, {collection: 'users'});
module.exports = userSchema;