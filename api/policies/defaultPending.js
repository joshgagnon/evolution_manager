module.exports = function(req, res, next) {
    if (req.query && req.user.accountType === 'client') {
        req.query.pending = true;
    }
    else{
        req.query.pending = false;
    }
    next();
};