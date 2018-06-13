import * as React from 'react';
import * as theme from './theme.css';
import { RoutingNodeDescriptor } from 'services/routing';
import { NavLink } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Collapse } from 'react-collapse';
import {
  getTitleForRoute,
  getIconForRoute,
} from 'scenes/components/sidebar/service';


interface ExternalProps {
  route: RoutingNodeDescriptor;
}

type PassedProps = ExternalProps & RouteComponentProps<{}>;

export class SidebarItem extends React.PureComponent<PassedProps> {

  render() {
    const {
      route,
    } = this.props;

    const subRoutes = route.children;

    return (
      <div>
        <NavLink
          className={theme.link}
          activeClassName={theme.active}
          to={route.fullpath}>
          {getIconForRoute(route)}
          {getTitleForRoute(route)}
        </NavLink>


        <Collapse
          isOpened={this.isSubRoutesVisible(route)}
        >
          {
            subRoutes.map(
              (subRoute, index) =>
                <NavLink
                  key={index}
                  className={theme.subLink}
                  activeClassName={theme.active}
                  to={subRoute.fullpath}>
                  {getIconForRoute(subRoute)}
                  {getTitleForRoute(subRoute)}
                </NavLink>
            )
          }
        </Collapse>
      </div>
    );
  }

  private isSubRoutesVisible(route: RoutingNodeDescriptor) {
    return document.location.pathname.includes(route.fullpath);
  }
}
