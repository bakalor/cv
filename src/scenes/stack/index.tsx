import * as React from "react";
import { Redirect, Route, Switch } from "react-router";
import { routing } from "services/routing";
import { Technologies } from "scenes/stack/technologies";

export class Stack extends React.PureComponent{
  render() {
    return <div >
      <Switch>
        <Redirect from={routing.stack._index.fullpath} to={routing.stack.technologies.fullpath} exact />
        <Route path={routing.stack.technologies.fullpath} component={Technologies} />
      </Switch>
    </div>;
  }
}
