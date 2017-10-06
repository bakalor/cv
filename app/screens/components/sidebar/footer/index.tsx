import * as React from "react";
import * as css from "./theme.css";
import * as cn from "classnames";

export class SideBarFooter extends React.PureComponent {
  render() {
    return <div className={css.footer}>
      <div className={css.text}>Find me in soshial networks:</div>
      <div className={css.links}>
        <div className={cn(css.link, css.github)}></div>
        <div className={cn(css.link, css.linkedin)}></div>
      </div>
    </div>
  }
}
