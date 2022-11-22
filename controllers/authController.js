const user = require('../models/userSchema')

const register = (req, res) => {
    user.create(req.body, (err, response) => {
        res.send(response)
    })
}

const login = (req, res) => {
    user.find({ email: req.body.email, password: req.body.password }, (err, response) => {
        res.send(response);
    })
}

const logout = (req, res) => {
    user.findByIdAndUpdate({_id: req.body._id}, { to_pay: 0 }, (err, response) => {
        res.send(response)
    });
}

module.exports = {
    register,
    login,
    logout
}