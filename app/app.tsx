import * as React from "react";
import * as core from "./theme/core.css";
import { withRouter, Switch, Redirect, Route } from "react-router";
import { routing } from "./services/routing";
import { Profile } from "./screens/profile/index";
import { Sidebar } from "screens/components/side-bar";
import { Header } from "screens/components/header";

class AppClass extends React.PureComponent {
  render() {
    return <div className={core.root}>
      <Header />
      <Sidebar />

      <Switch>
        <Redirect from={routing._index.fullpath} to={routing.profile.fullpath} exact />
        <Route path={routing.profile.fullpath} component={Profile} />
      </Switch>
    </div>
  }
}

export const App = withRouter(AppClass)