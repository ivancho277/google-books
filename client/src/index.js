import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//entry point for entire react app that gets sent to html file
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
