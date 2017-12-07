import * as React from "react";
import * as theme from "./theme.css";

interface StatItem {
  name: string;
  value: string | number;
}

// todo: receive this data from backend?
const _stats: StatItem[] = [
  {
    name: "First name",
    value: "Andrey"
  },
  {
    name: "Last name",
    value: "Lavrov"
  },
  {
    name: "Age",
    value: 21
  },
  {
    name: "Location",
    value: "Kharkov"
  },
  {
    name: "Company",
    value: "Simcord"
  },
];

export class GeneralInfoCard extends React.PureComponent {
  render() {
    return <div className={theme.card}>
      <div className={theme.col}>
        <div className={theme.generalInfo}>
          <div className={theme.photo}></div>
          <div className={theme.generalStats}>
            {_stats.map(stat =>
              <div className={theme.item}>
                <div className={theme.name}>{stat.name}</div>
                <div className={theme.value}>{stat.value}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={theme.col}>
      <div className={theme.piePlaceholder}></div>
      </div>
    </div>;
  }
}
