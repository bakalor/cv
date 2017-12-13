import * as d3pie from "d3pie";
import * as React from "react";
import * as theme from "./theme.css";
import * as cn from "classnames";

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
      { label: "Business Bullshitter", value: 20, color: "#01579b" },
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

export class Pie extends React.PureComponent {
  private _chart: HTMLDivElement;

  componentDidMount() {
    new d3pie(this._chart, pieOptions);
  }

  render() {
    return <div className={theme.wrapper}>
      <div className={theme.title}>Programmer type chart</div>
      <div className={theme.pie} ref={r => this._chart = r!} />
      <div className={theme.legend}>
        <div className={theme.col}>
          <div className={theme.item}>
            <div className={cn(theme.icon, theme.linear)} />
            <div className={theme.name}>Linear Programmer</div>
          </div>
          <div className={theme.item}>
            <div className={cn(theme.icon, theme.dealer)} />
            <div className={theme.name}>Dealer</div>
          </div>
        </div>
        <div className={theme.col}>
          <div className={theme.item}>
            <div className={cn(theme.icon, theme.bussines)} />
            <div className={theme.name}>Business Bullshitter</div>
          </div>
          <div className={theme.item}>
            <div className={cn(theme.icon, theme.rockstar)} />
            <div className={theme.name}>Rockstar</div>
          </div>
        </div>
      </div>
    </div>;
  }
}
