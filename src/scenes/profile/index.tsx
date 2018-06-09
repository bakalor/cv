import * as React from 'react';
import { GeneralInfoCard } from 'scenes/profile/components/general';
import { JobHistory } from 'scenes/profile/components/job-history';

export class Profile extends React.PureComponent {
  render() {
    return <div>
      <GeneralInfoCard />
      <JobHistory />
    </div>;
  }
}
