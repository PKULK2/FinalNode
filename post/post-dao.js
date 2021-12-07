const model = require('./post-model');

const time = {"_id":-1};
const findAllPosts = () => model.find().sort(time);
const createPost = (post) => model.create(post);
const deletePost = (id) => model.deleteOne({_id: id});
const updatePost = (id, post) => model.updateOne({_id: id},
    {$set: post});

module.exports = {
    findAllPosts, createPost,
    deletePost, updatePost
};
