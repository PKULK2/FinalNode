const model = require('./like-model');

const findAllLikes = () => model.find();
const createLikes = (like) => model.create(like);
const deleteLikes = (id) => model.deleteOne({_id: id});
const updateLikes = (id, like) => model.updateOne({_id: id},
    {$set: like});

module.exports = {
    findAllLikes, createLikes,
    deleteLikes, updateLikes
};
