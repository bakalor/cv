import * as React from "react";
import * as core from "./theme/core.css";
import { withRouter,  RouteComponentProps, Switch, Route, Redirect, } from "react-router";
import { Sidebar } from "scenes/components/sidebar";
import { Header } from "scenes/components/header";
import { routing } from "services/routing";
import { Profile } from "scenes/profile";
import { Stack } from "scenes/stack";

class AppClass extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    return <div className={core.root}>
      <Header />

      <Sidebar {...this.props} />

      <Switch>
        <Redirect from={routing._index.fullpath} to={routing.profile.fullpath} exact={true} />
        <Route path={routing.profile.fullpath} component={Profile} />
        <Route path={routing.stack.fullpath} component={Stack} />
      </Switch>
    </div>;
  }
}

export const App = withRouter(AppClass);
