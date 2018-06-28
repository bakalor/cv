import * as React from 'react';
import * as theme from './theme.css';

export class ProfileAvatar extends React.PureComponent {
  render() {
    return (
      <div className={theme.avatar} />
    );
  }
}

