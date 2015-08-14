module.exports = function(req, res, next) {
    if(req.user && (req.user.accountType === 'admin' || req.user.accountType === 'staff')) {
        return next();
    } else {
        return res.forbidden('Access denied.');
    }
};