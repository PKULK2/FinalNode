const userModel = require('./user-model');

const findAllUsers = () =>
    userModel.find();

const findOne = (id) =>
    userModel.findOne({_id: id});

const findUserById = (userId) =>
    userModel.findById(userId);

const findByUsernameAndPassword = ({username, password}) =>
    userModel.findOne({username: username, password: password});

const findByUsername = ({username}) =>
    userModel.findOne({username});

const createUser = (user) =>
    userModel.create(user);

const updateUser = (user) => {
    console.log(user)
     return userModel.updateOne({_id: user._id}, {$set: user});
}

const deleteUser = (userId) =>
    userModel.deleteOne({_id: userId});

module.exports = {
    findByUsername, findAllUsers, findUserById,
    findByUsernameAndPassword,
    createUser, updateUser, deleteUser, findOne
};