import * as React from "react";
import * as core from "./theme/core.css";
import { withRouter, Switch,  } from "react-router";
import { Sidebar } from "scenes/components/sidebar";
import { Header } from "scenes/components/header";

class AppClass extends React.PureComponent {
  render() {
    return <div className={core.root}>
      <Header />
      <Sidebar />

      <Switch>
      </Switch>
    </div>
  }
}

export const App = withRouter(AppClass)