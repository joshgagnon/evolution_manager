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

export default function(){
  Router.run(routes, this.req.url, Handler => {
    let content = React.renderToString(<Handler />);
    this.res.render('content.ejs', { reactOutput: content, _layoutFile: 'layout.ejs'});
  });
};
