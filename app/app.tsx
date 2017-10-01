import * as React from "react";
import { withRouter, Switch, Redirect, Route } from "react-router";
import { routing } from "./services/routing";
import { Profile } from "./screens/profile/index";

class AppClass extends React.PureComponent {
  render() {
    return <div>
      <Switch>
        <Redirect from={routing._index.fullpath} to={routing.profile.fullpath} exact />
        <Route path={routing.profile.fullpath} component={Profile} />
      </Switch>
    </div>
  }
}

export const App = withRouter(AppClass)