import * as React from "react";
import * as theme from "./theme.css";
import * as cn from "classnames";
import * as ReactTooltip from "react-tooltip";

interface PassedProps {
  content: React.ReactNode;
  iconCssClass?: string;
  contentCssClass?: string;
}

export class TooltipAdapter extends React.PureComponent<PassedProps> {

  render() {
    const id = new Date().getTime().toString();

    return <div className={theme.wrapper}>
      <a className={cn(theme.icon, this.props.iconCssClass)} data-tip data-for={id}> </a>
      <ReactTooltip
        id={id}
        globalEventOff="click"
        className={cn(theme.tooltip, this.props.contentCssClass)}
        event="click"
        effect="solid">
        {this.props.content}
      </ReactTooltip>
    </div>;
  }
}
