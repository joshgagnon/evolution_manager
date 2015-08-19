/*
var Routes = React.createFactory(require('../../assets/js/routes.jsx'));

import React from "react/addons";
//import Routes from "../../assets/js/routes.jsx"

export default () => {
	//console.log(React.createFactory(Routes));

	//let reactHtml = React.renderToString(React.createFactory(Routes)({}));
	let reactHtml = React.renderToString(Routes({}));
	//this.view('content.ejs', {reactOutput: reactHtml});
}*/


import React from "react";
import Router from "react-router";
import routes from '../../assets/js/routes.jsx';

export default function(url, data){
  Router.run(routes, url || this.req.url, Handler => {
  	/*var flash = this.req.flash('data');
  	if(flash.length){
  		data = JSON.parse(flash[0]);
  	}*/
    let content = React.renderToString(<Handler />);
    this.res.render('content.ejs', { reactOutput: content, user: JSON.stringify(this.req.user), data: JSON.stringify(data), _layoutFile: 'layout.ejs'});
  });
};
