module.exports = function(req, res, next) {
    if (req.query && req.user.accountType === 'client') {
       Matter.findOne({id: req.param('matter'), client: req.user.id})
       .then(function(matter){
              if(!matter){
                  throw('unauthorized')
              }
              req.model = matter;
            next();
       })
       .catch(function(){
            return res.forbidden();
       })
    }
    else{
        next();
    }
};