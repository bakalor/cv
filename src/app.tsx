import * as React from 'react';
import * as core from './theme/core.css';
import {
  withRouter,
  RouteComponentProps,
  Switch,
  Route,
  Redirect,
} from 'react-router';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';

import { SidebarContent } from 'scenes/components/sidebar-content';
import { Header } from 'scenes/components/header';
import {
  routing,
} from 'services';
import { Profile } from 'scenes/profile';
import { Stack } from 'scenes/stack';
import { ScreenContentContainer } from 'scenes/components/screen-content-container';

import { AppState } from 'store/store';
import { DeviceType } from 'store/layout/layout';

interface ConnectedProps {
  layout: DeviceType,
}

type Props = ConnectedProps & RouteComponentProps<{}>;

class AppClass extends React.PureComponent<Props> {

  render() {
    return (
      <div className={core.root}>
        <Sidebar
          docked={this.props.layout === 'desktop'}
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

export const App = withRouter(
  // TODO describe typing on module initialization layer
  connect<{}, {}, {}, AppState>(
    state => ({
      layout: state.layout.deviceType
    })
  )
    (AppClass)
);
