import * as React from "react";
import * as css from "./theme.css";
import { RoutingNodeDescriptor } from "services/routing";
import { NavLink } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { getTitleForRoute, getIconForRoute } from "scenes/components/sidebar/service";


interface PassedProps {
  route: RoutingNodeDescriptor;
}

interface State {
  collapsed: boolean;
}

export class SidebarItem extends React.Component<PassedProps & RouteComponentProps<{}>, State> {

  constructor(props: any) {
    super(props);
    this.state = { collapsed: true };
  }

  render() {
    const route = this.props.route;
    return <div>
      <NavLink
        onClick={() => this.toggleCollapse()}
        className={css.link}
        activeClassName={css.active}
        to={route.fullpath}
        exact={true}>
        {getIconForRoute(route)}
        {getTitleForRoute(route)}
      </NavLink>


      {!this.state.collapsed
        ? route.children.map(subRoute =>
          <NavLink
            key={route.fullpath}
            className={css.subLink}
            activeClassName={css.active}
            to={subRoute.fullpath}>
            {getIconForRoute(subRoute)}
            {getTitleForRoute(subRoute)}
          </NavLink>)
        : null}
    </div>;
  }

  private toggleCollapse = () => this.setState({ collapsed: !this.state.collapsed });
}
