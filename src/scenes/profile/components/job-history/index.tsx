import * as React from 'react';
import * as theme from './theme.css';
import { JobHistoryItem } from 'scenes/profile/components/job-history/item';
import { model } from 'model';

export class JobHistory extends React.PureComponent {
  render() {
    return <div className={theme.card}>
      <div className={theme.header}>
        <div className={theme.icon} />
        <div className={theme.title}>Job history</div>
      </div>

      {model.jobHistory.map((job, index) => <JobHistoryItem key={index} job={job} />)}
    </div>;
  }
}
