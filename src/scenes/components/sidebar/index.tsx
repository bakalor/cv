import * as React from "react";
import * as css from "./theme.css";
import { SideBarHeader } from "scenes/components/sidebar/header";
import { routing } from "services/routing";
import { SidebarItem } from "scenes/components/sidebar/item";
import { SideBarFooter } from "scenes/components/sidebar/footer";
import { RouteComponentProps } from "react-router";

export class Sidebar extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    return <div className={css.sidebar}>
      <div className={css.content}>
        <SideBarHeader />

        <div className={css.list}>
          {routing._index.children.map(route => <SidebarItem route={route} {...this.props} />)}
        </div>

        <SideBarFooter />
      </div>
    </div>;
  }
}
