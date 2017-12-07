import * as React from "react";
import * as theme from "./theme.css";

export class JobHistory extends React.PureComponent {
  render() {
    return <div className={theme.card}>
      <div className={theme.header}>
        Job history
      </div>

      <div className={theme.content}>
      <div className={theme.item}></div>
      <div className={theme.item}></div>
      <div className={theme.item}></div>
      </div>
    </div>;
  }
}
