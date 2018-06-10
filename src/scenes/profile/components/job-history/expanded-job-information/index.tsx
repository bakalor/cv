import * as React from 'react';
import * as theme from './theme.css';
import { JobDetails } from 'model/interfaces';

interface PassedProps {
  jobDetails: JobDetails;
}

interface Item {
  title: string;
  value: string | number;
}
export class ExpandedJobInformation extends React.PureComponent<PassedProps> {

  render() {
    const {
      jobDetails,
    } = this.props;

    const generalProgectInfo = this.extractGeneralProjectInfo(jobDetails);

    return <div className={theme.wrapper}>
      <div className={theme.title}>
        Project details
      </div>

      <div className={theme.info}>
        {this.renderGeneralInfoSection(generalProgectInfo)}

        <div className={theme.description}>
          <div className={theme.title}>
            Description:
          </div>
          <div className={theme.text}>
            {jobDetails.description}
            {<br />}
            {<br />}
            Main responsibilities:
            {<br />}
            {jobDetails.responsibleFor.map(feature => [
              `- ${feature}`,
              <br key={feature} />,
            ])}
            {<br />}
            <b>Tools used: </b>
            {jobDetails.tools.join('; ')}
            {<br />}
            <b>Technologies used: </b>
            {jobDetails.technologies.join('; ')}
          </div>
        </div>
      </div>
    </div>;
  }

  private renderGeneralInfoSection = (generalInfo: Item[]) => {
    return (
      <div className={theme.generalInfo}>
        {generalInfo.map(generalInfoItem => (
          <div className={theme.stat}>
            <div className={theme.name}>
              {generalInfoItem.title}
            </div>
            <div className={theme.value}>
              {generalInfoItem.value}
            </div>
          </div>
        ))}
      </div>
    );
  }

  private extractGeneralProjectInfo = (jobDetails: JobDetails): Item[] => {
    const generalProgectInfo = [
      { title: 'Customer', value: jobDetails.customer },
      { title: 'Role', value: jobDetails.role },
      { title: 'Team size', value: jobDetails.teamSize },
      { title: 'Job Position', value: jobDetails.jobPosition },
    ];

    return generalProgectInfo;
  }
}
