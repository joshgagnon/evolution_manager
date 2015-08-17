module.exports = function(req, res, next) {
  // Make sure that the user specified is the current user
  if(req.user.accountType === 'client') {
    req.query.client = req.user.id;
  }
  else{
  	req.query.assignedTo = req.user.id;
  }
  return next();
};