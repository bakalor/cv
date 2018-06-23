import * as React from 'react';
import * as theme from './theme.css';
import { Redirect, Switch, Route } from 'react-router';
import { routing } from 'services';
import { FrontendStack } from 'scenes/stack/frontend';
import { BackendStack } from 'scenes/stack/backend';

export class Stack extends React.PureComponent {
  render() {
    return <div className={theme.wrapper}>
      <Switch>
        <Redirect from={routing.stack._index.fullpath} to={routing.stack.frontend.fullpath} exact={true} />
        <Route path={routing.stack.frontend.fullpath} component={FrontendStack} />
        <Route path={routing.stack.backend.fullpath} component={BackendStack} />
      </Switch>
    </div>;
  }
}
