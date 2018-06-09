import * as React from 'react';
import * as theme from './theme.css';
import * as cn from 'classnames';
import { Job } from 'model/interfaces';


export class JobHistoryItem extends React.PureComponent<{ job: Job }> {
  render() {
    const {
      job: {
        logoClass,
        company,
        period,
        position,
      },
    } = this.props;

    return (
      <div className={theme.wrapper}>
        <div className={theme.companyLogo}>
          <div className={cn(theme.logo, logoClass)} />
        </div>
        <div className={theme.info}>
          <div className={theme.title}>{company}</div>
          <div className={theme.stat}>
            <div className={theme.name}>Period:</div>
            <div className={theme.val}>{period}</div>
          </div>
          <div className={theme.stat}>
            <div className={theme.name}>Position:</div>
            <div className={theme.val}>{position}</div>
          </div>
        </div>
      </div>
    );
  }
}
