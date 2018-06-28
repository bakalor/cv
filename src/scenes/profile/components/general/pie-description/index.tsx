import * as React from 'react';
import * as theme from './theme.css';

export class PieDescription extends React.PureComponent {

  render() {
    return (
      <div className={theme.chartDesc}>
        <div className={theme.icon} />
        To read about this chart please visit this article:{<br />}
        <a href="https://habrahabr.ru/post/336248/" className={theme.link}> Habrahabr</a>
      </div>
    );
  }
}