import * as React from 'react';
import * as theme from './theme.css';
import { SideBarHeader } from 'scenes/components/sidebar/header';
import { routing } from 'services/routing';
import { SidebarItem } from 'scenes/components/sidebar/item';
import { SideBarFooter } from 'scenes/components/sidebar/footer';
import { RouteComponentProps } from 'react-router';

export class Sidebar extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    return <div className={theme.sidebar}>
      <div className={theme.content}>
        <SideBarHeader />

        <div className={theme.list}>
          {routing._index.children.map((route, index) =>
            <SidebarItem
              key={index}
              route={route}
              {...this.props}
            />)}
        </div>

        <SideBarFooter />
      </div>
    </div>;
  }
}
