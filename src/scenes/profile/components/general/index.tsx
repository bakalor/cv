import * as React from "react";
import * as theme from "./theme.css";
import * as d3pie from "d3pie";
import * as cn from "classnames";

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

const _additionalStats: StatItem[] = [
  {
    name: "Primary specialization",
    value: "Frontend developer"
  },
  {
    name: "Level",
    value: "Middle+"
  },
  {
    name: "Secondary specialization",
    value: "Backend developer (Node.js)"
  },
  {
    name: "Additional interests",
    value: "AI"
  }
];

/*
  Current type definition is not completed
  (labels.outer.format: "none" option does not exist)
*/
const pieOptions: any = {
  size: {
    canvasWidth: 400,
    canvasHeight: 320,
    pieOuterRadius: 150,
    pieInnerRadius: 20
  },
  labels: {
    outer: {
      format: "none"
    },
    percentage: {
      color: "white",
      fontSize: 14
    },
  },
  effects: {
    load: {
      effect: "default", // none / default
      speed: 1000
    },
    pullOutSegmentOnClick: {
      effect: "bounce", // none / linear / bounce / elastic / back
      speed: 300,
      size: 10
    },
    highlightSegmentOnMouseover: true,
    highlightLuminosity: -0.2
  },
  data: {
    sortOrder: "none",
    content: [
      { label: "Linear Programmer", value: 35, color: "#00838f" },
      { label: "Dealer", value: 35, color: "#1976d2" },
      { label: "Bussines Bullshit", value: 20, color: "#01579b" },
      { label: "Rockstar", value: 10, color: "#0d47a1" },
    ]
  },
  tooltips: {
    enabled: true,
    type: "placeholder",
    string: "{label}: {percentage}%",
    styles: {
      fadeInSpeed: 172,
      backgroundOpacity: 0.7,
      fontSize: 14,
      padding: 12,
      top: 20
    }
  },
};
export class GeneralInfoCard extends React.PureComponent {

  private _chart: HTMLDivElement;
  private _pie: d3pie.ID3PieChart;

  componentDidMount() {
    this._pie = new d3pie(this._chart, pieOptions);
  }

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
        <div className={theme.additionalInfo}>
          {_additionalStats.map(stat =>
            <div className={theme.item}>
              <div className={theme.name}>{stat.name}</div>
              <div className={theme.value}>{stat.value}</div>
            </div>
          )}
        </div>
      </div>
      <div className={theme.col}>
        <div className={theme.chartTitle}>Programmer type chart</div>
        <div
          className={theme.piePlaceholder}
          ref={r => this._chart = r!}>
        </div>
        <div className={theme.legend}>
          <div className={theme.col}>
            <div className={theme.val}>
              <div className={cn(theme.icon, theme.linear)} />
              <div className={theme.name}>Linear Programmer</div>
            </div>
            <div className={theme.val}>
              <div className={cn(theme.icon, theme.dealer)} />
              <div className={theme.name}>Dealer</div>
            </div>
          </div>
          <div className={theme.col}>
            <div className={theme.val}>
              <div className={cn(theme.icon, theme.bussines)} />
              <div className={theme.name}>Business Bullshitter</div>
            </div>
            <div className={theme.val}>
              <div className={cn(theme.icon, theme.rockstar)} />
              <div className={theme.name}>Rockstar</div>
            </div>
          </div>
        </div>

        <div className={theme.chartDesc}>
          <div className={theme.icon}></div>
          To read about this chart please visit this article:{<br />}
          <a href="https://habrahabr.ru/post/336248/" className={theme.link}> Habrahabr</a>
        </div>
      </div>
    </div>;
  }
}
