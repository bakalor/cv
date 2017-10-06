import * as React from "react";
import * as css from "./theme.css";
// import * as cn from "classnames";
import { SideBarHeader } from "scenes/components/sidebar/header";
import { routing } from "services/routing";
import { SidebarItem } from "scenes/components/sidebar/item";
import { SideBarFooter } from "scenes/components/sidebar/footer";

export class Sidebar extends React.PureComponent {
  render() {
    return <div className={css.sidebar}>
      <div className={css.content}>
        <SideBarHeader />

        <div className={css.list}>
          {routing._index.children.map(route => <SidebarItem route={route} />)}
        </div>

        <SideBarFooter />
      </div>
    </div>
  }
}
