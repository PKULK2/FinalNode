const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
                                       imdbID: String,
                                        user: String,
                                        date: String,
                                        content: String,

                                   }, {collection: 'reviews'});
module.exports = userSchema;