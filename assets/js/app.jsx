import React from "react/addons";
import Router from "react-router";
import routes from "./routes";

let mountNode = document.getElementById("main");

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler />, mountNode);
});

