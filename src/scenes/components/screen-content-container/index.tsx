import * as React from 'react';
import * as theme from './theme.css';

export class ScreenContentContainer extends React.PureComponent {
  render() {
    return (
      <div className={theme.screenContentContainer}>
        {this.props.children}
      </div>
    );
  }

}
