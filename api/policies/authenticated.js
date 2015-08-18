module.exports = function(req, res, next) {
	console.log(sails.config.autoreload)
    if(req.isAuthenticated()) {
        return next();
    } else {
    	if(req.wantsJSON){
        	return res.forbidden('Access denied.');
    	}
    	else{
    		return res.redirect('/login')
    	}
    }
};