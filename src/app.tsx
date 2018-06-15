import * as React from 'react';
import * as core from './theme/core.css';
import {
  withRouter,
  RouteComponentProps,
  Switch,
  Route,
  Redirect,
} from 'react-router';
import { SidebarContent } from 'scenes/components/sidebar-content';
import { Header } from 'scenes/components/header';
import { routing } from 'services/routing';
import { Profile } from 'scenes/profile';
import { Stack } from 'scenes/stack';
import { ScreenContentContainer } from 'scenes/components/screen-content-container';
import Sidebar from 'react-sidebar';

class AppClass extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    return (
      <div className={core.root}>
        <Sidebar
          open={true}
          docked={true}
          sidebar={<SidebarContent {...this.props} />}
        >
          <Header />

          <ScreenContentContainer>
            <Switch>
              <Redirect from={routing._index.fullpath} to={routing.profile.fullpath} exact={true} />
              <Route path={routing.profile.fullpath} component={Profile} />
              <Route path={routing.stack._index.fullpath} component={Stack} />
            </Switch>
          </ScreenContentContainer>
        </Sidebar>
      </div>
    );
  }
}

export const App = withRouter(AppClass);
