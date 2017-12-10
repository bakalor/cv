import * as React from "react";
import * as theme from "./theme.css";
import * as cn from "classnames";
import { Job } from "model";


export class JobHistoryItem extends React.PureComponent<{ job: Job }> {
  render() {
    const job = this.props.job;
    return <div className={theme.wrapper}>
      <div className={theme.companyLogo}>
        <div className={cn(theme.logo, job.logoClass)}></div>
      </div>
      <div className={theme.info}>
        <div className={theme.title}>{job.company}</div>
        <div className={theme.stat}>
          <div className={theme.name}>Period:</div>
          <div className={theme.val}>{job.period}</div>
        </div>
        <div className={theme.stat}>
          <div className={theme.name}>Position:</div>
          <div className={theme.val}>{job.position}</div>
        </div>
      </div>
    </div>;
  }
}
