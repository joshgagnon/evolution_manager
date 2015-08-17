/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var React = require('react/addons');


var Main = React.createFactory(require('../../assets/js/components/main.jsx'));
module.exports = {
	home: function(req, res){
		var reactHtml = React.renderToString(Main({}));
		res.view('homepage.ejs', {reactOutput: reactHtml});
	}
};

