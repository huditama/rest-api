const { verify } = require('../helpers/jwt')

module.exports = (req, res, next) => {
    try {
        const decoded = verify(req.headers.token, process.env.JWT_SECRET)
        req.authenticatedUser = decoded
        next()
    } catch (error) {
        res.status(401).json({ type: 'AUTHENTICATION ERROR', message: 'You do not have access to this page!' })
    }
}