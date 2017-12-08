import * as React from "react";
import * as theme from "./theme.css";
import { JobHistoryItem } from "scenes/profile/components/job-history/item";

const _workHistory = [
  {
    companyName: "Teamdev",
    workingPeriod: "Sep 2015 - July 2017",
    position: "Junior frontend developer",
    logoClass: theme.teamdev
  }
];
export class JobHistory extends React.PureComponent {
  render() {
    return <div className={theme.card}>
      <div className={theme.header}>
        <div className={theme.icon} />
        <div className={theme.title}>Job history</div>
      </div>

      <div className={theme.content}>
        {_workHistory.map((item, index) =>
          <JobHistoryItem
            key={index}
            companyName={item.companyName}
            workPeriod={item.workingPeriod}
            position={item.position}
            logoClass={item.logoClass}
          />)}
      </div>
    </div>;
  }
}
