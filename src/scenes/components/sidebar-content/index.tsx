import * as React from 'react';
import * as theme from './theme.css';
import { SideBarHeader } from 'scenes/components/sidebar-content/header';
import { routing } from 'services/routing';
import { SidebarItem } from 'scenes/components/sidebar-content/item';
import { SideBarFooter } from 'scenes/components/sidebar-content/footer';
import { RouteComponentProps } from 'react-router';

export class SidebarContent extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    return <div className={theme.sidebar}>
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
    </div>;
  }
}
