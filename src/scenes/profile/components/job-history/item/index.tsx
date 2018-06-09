import * as React from 'react';
import * as theme from './theme.css';
import * as cn from 'classnames';
import { Job } from 'model/interfaces';
import { Accordeon } from 'scenes/components/accordeon';
import { ExpandedJobInformation } from 'scenes/profile/components/job-history/expanded-job-information';


export class JobHistoryItem extends React.PureComponent<{ job: Job }, { open: boolean }> {

  state = {
    open: false,
  };

  render() {
    const {
      job: {
        logoClass,
        company,
        period,
        position,
      },
    } = this.props;

    const {
      open,
    } = this.state;

    return (
      <div>
        <div
          className={theme.wrapper}
          onClick={() => this.setState({ open: !this.state.open })}>
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

        <Accordeon>
          {open
            ? <ExpandedJobInformation />
            : null}
        </Accordeon>
      </div>
    );
  }
}
