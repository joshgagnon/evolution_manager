module.exports = function(req, res, next) {
  // Make sure that the user specified is the current user
  if(req.query && req.user.accountType === 'client') {
    req.query.client = req.user;
  }
  return next();
};