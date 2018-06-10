import * as React from 'react';
import * as theme from './theme.css';

export class JobHistoryHeader extends React.PureComponent {
  render() {
    return (
      <div className={theme.header}>
        <div className={theme.icon} />
        <div className={theme.title}>
          Job history
        </div>
      </div>
    );
  }
}
