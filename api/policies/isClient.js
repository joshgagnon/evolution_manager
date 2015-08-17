module.exports = function(req, res, next) {
    if (req.user.accountType === 'client') {
        req.query.client = req.user.id;
    }
    return next();
};