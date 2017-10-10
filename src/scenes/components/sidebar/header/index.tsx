import * as React from "react";
import * as css from "./theme.css";

export class SideBarHeader extends React.PureComponent {
  render() {
    return <div className={css.header}>
      <div className={css.photo}>
      </div>

      <div >
        <div className={css.title}>CV Project</div>
        <div className={css.subTitle}>(surprised-cat)</div>
      </div>

    </div>;
  }
}
