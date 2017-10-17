import * as React from "react";
import * as theme from "./theme.css";

export class Profile extends React.PureComponent {
  render() {
    return <div className={theme.wrapper}>
      <div className={theme.card}>
        <div className={theme.generalInfo}>
          <div className={theme.photo}></div>
          <div className={theme.generalStats}>
            <div className={theme.item}>
              <div className={theme.name}>First name</div>
              <div className={theme.value}>Andrii</div>
            </div>
            <div className={theme.item}>
              <div className={theme.name}>Last name</div>
              <div className={theme.value}>Lavrov</div>
            </div>
            <div className={theme.item}>
              <div className={theme.name}>Age</div>
              <div className={theme.value}>21</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
