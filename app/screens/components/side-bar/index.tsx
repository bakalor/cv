import * as React from "react";
import * as css from "./theme.css";
import * as cn from "classnames";
import { SideBarHeader } from "screens/components/side-bar/header";

export class Sidebar extends React.PureComponent {
  render() {
    return <div className={css.sidebar}>
      <div className={css.content}>
        <SideBarHeader />

        <div className={css.list}>
          <div className={css.item}>
            <div className={cn(css.icon, css.tool)}></div>
            <div className={css.title}>Technology stack</div>
          </div>
        </div>
      </div>
    </div>
  }
}
