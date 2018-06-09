import * as React from 'react';
import * as theme from './theme.css';

export class ExpandedJobInformation extends React.PureComponent {
  render() {
    return <div className={theme.wrapper}>
      <div className={theme.title}>Job details</div>
      <div className={theme.info}>
      </div>
    </div>;
  }
}
