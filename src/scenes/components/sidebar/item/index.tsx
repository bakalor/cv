import * as React from 'react';
import * as theme from './theme.css';
import { RoutingNodeDescriptor } from 'services/routing';
import { NavLink } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import {
  getTitleForRoute,
  getIconForRoute,
} from 'scenes/components/sidebar/service';


interface PassedProps {
  route: RoutingNodeDescriptor;
}

export class SidebarItem extends React.PureComponent<PassedProps & RouteComponentProps<{}>> {

  render() {
    const {
      route,
    } = this.props;

    return <div>
      <NavLink
        className={theme.link}
        activeClassName={theme.active}
        to={route.fullpath}>
        {getIconForRoute(route)}
        {getTitleForRoute(route)}
      </NavLink>


      {this.props.location.pathname.indexOf(this.props.route.path) !== -1
        ? route.children.map(subRoute =>
          <NavLink
            key={route.fullpath}
            className={theme.subLink}
            activeClassName={theme.active}
            to={subRoute.fullpath}>
            {getIconForRoute(subRoute)}
            {getTitleForRoute(subRoute)}
          </NavLink>)
        : null}
    </div>;
  }

}
