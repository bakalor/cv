import * as React from 'react';
import * as theme from './theme.css';
import { JobHistoryItem } from 'scenes/profile/components/job-history/job-history-item';
import { model } from 'model';
import { JobHistoryHeader } from 'scenes/profile/components/job-history/header';

export class JobHistory extends React.PureComponent {
  render() {
    const {
      jobHistory,
    } = model;

    return (
      <div className={theme.card}>
        <JobHistoryHeader />

        {
          jobHistory
            .map((job, index) => (
              <JobHistoryItem
                key={index}
                job={job} />
            ))
        }
      </div>
    );
  }
}
