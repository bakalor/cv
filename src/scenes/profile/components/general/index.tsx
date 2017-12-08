import * as React from "react";
import * as theme from "./theme.css";
import { Pie } from "scenes/profile/components/general/pie";
import { stats } from "scenes/profile/components/general/stats";

export class GeneralInfoCard extends React.PureComponent {

  render() {
    return <div className={theme.card}>
      <div className={theme.col}>

        <div className={theme.generalInfo}>
          <div className={theme.photo}></div>
          <div className={theme.generalStats}>
            {stats.general.map((stat, index) =>
              <div key={index} className={theme.item}>
                <div className={theme.name}>{stat.name}</div>
                <div className={theme.value}>{stat.value}</div>
              </div>
            )}
          </div>
        </div>

        <div className={theme.additionalInfo}>
          {stats.additional.map((stat, index) =>
            <div key={index} className={theme.item}>
              <div className={theme.name}>{stat.name}</div>
              <div className={theme.value}>{stat.value}</div>
            </div>
          )}
        </div>
      </div>

      <div className={theme.col}>
        <Pie />
        <div className={theme.chartDesc}>
          <div className={theme.icon}></div>
          To read about this chart please visit this article:{<br />}
          <a href="https://habrahabr.ru/post/336248/" className={theme.link}> Habrahabr</a>
        </div>
      </div>
    </div>;
  }
}
