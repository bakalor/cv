import * as React from 'react';
import * as theme from './theme.css';
import * as cn from 'classnames';
import * as ReactTooltip from 'react-tooltip';

interface PassedProps {
  content: React.ReactNode;
  iconCssClass?: string;
  contentCssClass?: string;
}

export class TooltipAdapter extends React.PureComponent<PassedProps> {

  render() {
    const {
      iconCssClass,
      contentCssClass,
      content,
    } = this.props;

    const tooltipId = this.getTooltipId();

    const iconClasses = cn(theme.icon, iconCssClass);
    const contentClasses = cn(theme.tooltip, contentCssClass);

    return <div className={theme.wrapper}>
      <a
        className={iconClasses}
        data-tip
        data-for={tooltipId}
      />

      <ReactTooltip
        id={tooltipId}
        globalEventOff="click"
        className={contentClasses}
        event="click"
        effect="solid">
        {content}
      </ReactTooltip>
    </div>;
  }

  private getTooltipId = () => new Date().getTime().toString();
}
