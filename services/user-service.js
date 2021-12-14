const userDao = require('../user/user-dao');

module.exports = (app) => {
    const findAllUsers = (req, res) =>
        userDao.findAllUsers()
            .then(users => res.json(users));

    const findOneUser = (req, res) => {
        console.log(req.body, "BODY")
        console.log(req.params, "PARAMS")
        console.log(req.params.id, "ID")
        return userDao.findOne(req.params.id)
            .then(users => res.json(users));
    }

    const findUserById = (req, res) =>
        userDao.findUserById(req.userId)
            .then(user => res.json(user));

    const deleteUser = (req, res) =>
        userDao.deleteUser(req.params.userId)
            .then(status => req.send(status));

    const updateUser = (req, res) => {
        let profile = {
            ...req.body
        }
        req.session['profile'] = profile;
         return userDao.updateUser(profile)
            .then((status) => res.send(status));
    }
    const login = (req, res) => {
        userDao.findByUsernameAndPassword(req.body)
            .then(user => {
                if(user) {
                    req.session['profile'] = user;
                    res.json(user);
                    return;
                }
                res.sendStatus(403);
            })
    }

    const register = (req, res) => {
        userDao.findByUsername(req.body)
            .then(user => {
                if(user) {
                    res.sendStatus(404);
                    return;
                }
                userDao.createUser(req.body)
                    .then(user => {
                        req.session['profile'] = user;
                        res.json(user)
                    });
            })
    }

    const profile = (req, res) => {
        return res.json(req.session['profile']);
    }

    const logout = (req, res) =>
        res.send(req.session.destroy());

    const profileByGet = (req, res) =>
        res.json(req.session['profile']);

    app.post('/api/login', login);
    app.post('/api/register', register);
    app.post('/api/profile', profile);
    app.get('/api/profileByGet', profileByGet);
    app.post('/api/logout', logout);
    app.put('/api/profile/:id', updateUser);
    app.delete('/api/users/:userId', deleteUser);
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:userId', findUserById);
    app.get('/api/users/:id', findOneUser);
};