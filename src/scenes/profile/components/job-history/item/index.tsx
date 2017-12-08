import * as React from "react";
import * as theme from "./theme.css";
import * as cn from "classnames";


interface PassedProps {
  companyName: string;
  workPeriod: string;
  position: string;
  logoClass: string;
}

export class JobHistoryItem extends React.PureComponent<PassedProps> {
  render() {

    return <div className={theme.wrapper}>
      <div className={theme.companyLogo}>
        <div className={cn(theme.logo, this.props.logoClass)}></div>
      </div>
      <div className={theme.info}>
        <div className={theme.title}>{this.props.companyName}</div>
        <div className={theme.stat}>
          <div className={theme.name}>Period:</div>
          <div className={theme.val}>{this.props.workPeriod}</div>
        </div>
        <div className={theme.stat}>
          <div className={theme.name}>Position:</div>
          <div className={theme.val}>{this.props.position}</div>
        </div>
      </div>
    </div>;
  }
}
