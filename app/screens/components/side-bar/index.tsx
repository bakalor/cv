import * as React from "react";
import * as css from "./theme.css";

export class Sidebar extends React.PureComponent {
  render() {
    return <div className={css.sidebar}>
      <div className={css.content}>
        <div className={css.header}>
          <div className={css.photo}>
          </div>
          <div className={css.text}>
            <div className={css.primary}>CV Project</div>
            <div className={css.secondary}>(surprised-cat)</div>
          </div>
        </div>
      </div>
    </div>
  }
}
