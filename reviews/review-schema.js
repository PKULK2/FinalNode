const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
                                       imdbID: String,
                                        MovieName: String,
                                        user: String,
                                        date: String,
                                        content: String,

                                   }, {collection: 'reviews'});
module.exports = userSchema;