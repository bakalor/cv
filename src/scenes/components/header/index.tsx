import * as React from 'react';
import * as theme from './theme.css';
import { connect } from 'react-redux';
import { DeviceType, AppState, OpenSidebarCreator, openSidebar } from 'store';

interface ConnectedProps {
  sidebarIsOpened: boolean;
  deviceType: DeviceType;
}

interface ConnectedActions {
  openSidebar: OpenSidebarCreator
}

type Props = ConnectedProps & ConnectedActions;

export class HeaderClass extends React.PureComponent<Props> {
  render() {
    const {
      sidebarIsOpened,
      openSidebar,
    } = this.props;

    return (
      <div
        className={theme.header}
      >
        {!sidebarIsOpened &&
          <div
            className={theme.menu}
            onClick={openSidebar}
          />
        }
      </div>
    );
  }
}

export const Header = connect<ConnectedProps, ConnectedActions, {}, AppState>(
  state => ({
    sidebarIsOpened: state.layout.sidebarIsOpened,
    deviceType: state.layout.deviceType,
  }),
  {
    openSidebar,
  }
)(HeaderClass)