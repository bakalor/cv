import * as React from "react";
import * as css from "./theme.css";
import * as cn from "classnames";
import { RoutingLeafNode } from "services/routing";

interface PassedProps {
  route: RoutingLeafNode;
}

interface State {
  collapsed: boolean;
}

export class SidebarItem extends React.Component<PassedProps, State> {

  constructor(props: PassedProps) {
    super(props);
    this.state = { collapsed: true }
  }

  render() {
    const route = this.props.route;
    return <div>
      <div className={css.item}
        onClick={() => this.toggleCollapse()}>
        <div className={cn(css.icon, css.tool)}></div>
        <div className={css.title}>{route.title}</div>
      </div>

      {!this.state.collapsed
        ? route.children.map(subRoute =>
          <div className={css.child} key={subRoute.fullpath}>
            <div className={cn(css.icon, css.tool)}></div>
            <div className={css.title}>{subRoute.title}</div>
          </div>)
        : null}
    </div>
  }

  private toggleCollapse = () => this.setState({ collapsed: !this.state.collapsed });
}
