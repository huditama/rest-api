module.exports = (req, res, next) => {
    if (req.authenticatedUser.id == req.params.id) next()
    else res.status(401).json({ type: 'AUTHORIZATION ERROR', message: 'You can only access your page!' })
}