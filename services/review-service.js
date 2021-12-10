const reviewDao = require('../reviews/review-dao');

module.exports = (app) => {
    const findAllReviews = (req, res) =>
        reviewDao.findAllReviews()
            .then(reviews => res.json(reviews));

    const findReviewById = (req, res) =>
        reviewDao.findReviewById(req._id)
            .then(review => res.json(review));

    const findReviewByIMDBID = (req, res) =>
        reviewDao.findReviewbyIMDBID(req.imdbID)
            .then(reviews => res.json(reviews));

    const createReview = (req, res) => {
        reviewDao.createReview(req.body)
            .then((review) => res.json(review))
    }




    


    app.get('/api/reviews', findAllReviews);
    app.post("/api/create-review", createReview);
    app.get('/api/review-byID/:_id', findReviewById);
    app.get('/api/review-byimbdID/:imdbID', findReviewByIMDBID);
};