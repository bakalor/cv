import * as ReactDOM from "react-dom";
import * as React from "react";
import { App } from "app";
import { BrowserRouter } from "react-router-dom";



const render = (Component: any) =>
  ReactDOM.render(
    <BrowserRouter>
      <Component />
    </BrowserRouter >,
    document.getElementById("app")
  );

render(App)
declare var module: any;

if (module.hot) {
  module.hot.accept("./app.tsx", () => {
    const AppComponent = require("./app.tsx").App;
    render(AppComponent);
  })
}
