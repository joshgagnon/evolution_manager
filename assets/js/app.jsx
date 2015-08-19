import "babel/register";
import React from "react/addons";
import Router from "react-router";
import routes from "./routes";
import Master from "./stores/master";

let mountNode = document.getElementById("main");

try{
	let data = JSON.parse(document.getElementById("data").textContent);
	Master.loadData(data);
}catch(e){
	//do nothing
}


Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler />, mountNode);
});

