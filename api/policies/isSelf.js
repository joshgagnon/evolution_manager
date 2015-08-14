module.exports = function(req, res, next) {
    if (req.query && req.user.accountType === 'client') {
        req.query.id = req.user.id;
    }
    return next();
};