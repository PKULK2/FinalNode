const reviewModel = require('./review-model');

const findAllReviews = () =>
    reviewModel.find();

const findReviewById = (userId) =>
    reviewModel.findById(userId);

const findReviewByIMDBID  = (imdbID) =>
    reviewModel.find({imdbID: imdbID});


const createReview = (review) =>
    reviewModel.create(review);

const deleteReview = (id) =>
    reviewModel.deleteOne({_id: id});

module.exports = {
    findAllReviews,findReviewById,findReviewByIMDBID,createReview, deleteReview
};