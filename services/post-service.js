const dao = require('../post/post-dao');

module.exports = (app) => {

    const findAllPosts = (req, res) =>
        dao.findAllPosts()
            .then(posts => res.json(posts));

    app.get('/api/posts', findAllPosts);

    const deletePost = (req, res) => {
        dao.deletePost(req.params.id)
            .then((status) => res.send(status));
    }
    app.delete("/api/posts/:id", deletePost);

    const createPost = (req, res) => {
        dao.createPost(req.body)
            .then((newPost) => res.json(newPost))
    }

    app.post("/api/posts", createPost);
}