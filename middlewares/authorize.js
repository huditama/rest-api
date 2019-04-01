module.exports = (req, res, next) => {
    if (req.authenticatedUser.role == 'admin') next()
    else res.status(401).json({ type: 'AUTHORIZATION ERROR', message: 'You do not have access to this page!' })
}