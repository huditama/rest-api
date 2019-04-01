const { User } = require('../models')
const { sign } = require('../helpers/jwt')

class authController {
    static signUp(req, res) {
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

    static signIn(req, res) {
        const { email, password } = req.body
        User
            .findOne({ where: { email } })
            .then((findOneUser) => {
                if (!findOneUser) res.status(401).json({ message: "User does not exist!" })
                else if (!findOneUser.validatePassword(password)) res.status(401).json({ message: "Email/Password is incorrect!" })
                else {
                    const { id, email, role } = findOneUser
                    const payload = { id, email, role }
                    const token = sign(payload)
                    req.headers.token = token
                    res.status(200).json({ message: 'You are now logged in!', token })
                }
            })
            .catch((err) => {
                res.status(400).json(err.message)
            })
    }
}

module.exports = authController