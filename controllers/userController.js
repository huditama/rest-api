const { User } = require('../models')

class userController {
    static findAll(req, res) {
        User
            .findAll()
            .then((allUsers) => {
                res.status(200).json(allUsers)
            })
            .catch((err) => {
                res.status(400).json(err.message)
            })
    }

    static findOne(req, res) {
        User
            .findByPk(req.params.id)
            .then((findOneUser) => {
                res.status(200).json(findOneUser)
            })
            .catch((err) => {
                res.status(400).json(err.message)
            })
    }

    static create(req, res) {
        const { email, password, role } = req.body
        User
            .findOne({ where: { role: 'admin' } })
            .then((oneAdmin) => {
                if (oneAdmin && role == 'admin') throw Error('There is already an existing admin!')
                else return User.create({ email, password, role })
            })
            .then((createdUser) => {
                res.status(201).json(createdUser)
            })
            .catch((err) => {
                res.status(400).json(err.message)
            })
    }

    static delete(req, res) {
        if (req.authenticatedUser.id == req.params.id) res.status(400).json({ message: 'You cannot delete yourself!' })
        else {
            User
                .destroy({ where: { id: req.params.id } })
                .then((destroyedUser) => {
                    res.status(200).json(destroyedUser)
                })
                .catch((err) => {
                    res.status(400).json(err.message)
                })
        }
    }

    static update(req, res) {
        const { email, password, role } = req.body
        User
            .findOne({ where: { role: 'admin' } })
            .then((oneAdmin) => {
                if (oneAdmin && role == 'admin') throw Error('You cannot change your role to admin!')
                else return User.update({ id: req.params.id, email, password, role }, { where: { id: req.params.id }, individualHooks: true })
            })
            .then((updatedUser) => {
                res.status(201).json(updatedUser)
            })
            .catch((err) => {
                res.status(400).json(err.message)
            })
    }
}

module.exports = userController