const reviewDao = require('../like/like-dao');

module.exports = (app) => {
    const findAll = (req, res) =>
        reviewDao.findAllLikes()
            .then(like => res.json(like));

    // const findReviewById = (req, res) =>
    //     reviewDao.findReviewById(req._id)
    //         .then(review => res.json(review));
    //
    // const findReviewByIMDBID = (req, res) =>
    //     reviewDao.findReviewByIMDBID(req.params.imdbID)
    //         .then(reviews => res.json(reviews));

    const createReview = (req, res) => {
        reviewDao.createLikes(req.body)
            .then((like) => res.json(like))
    }

    app.get('/api/likes', findAll);
    app.post('/api/create-likes', createReview);
    // app.get('/api/review-byID/:_id', findReviewById);
    // app.get('/api/review-byimbdID/:imdbID', findReviewByIMDBID);
};