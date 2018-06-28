import * as cn from 'classnames';
import * as React from 'react';
import * as theme from './theme.css';


export class ProgrammerTypeChartLegend extends React.PureComponent {
  render() {
    return (
      <div className={theme.legend}>
        <div className={theme.item}>
          <div className={cn(theme.icon, theme.linear)} />
          <div className={theme.name}>Linear Programmer</div>
        </div>
        <div className={theme.item}>
          <div className={cn(theme.icon, theme.dealer)} />
          <div className={theme.name}>Dealer</div>
        </div>
        <div className={theme.item}>
          <div className={cn(theme.icon, theme.bussines)} />
          <div className={theme.name}>Business Bullshitter</div>
        </div>
        <div className={theme.item}>
          <div className={cn(theme.icon, theme.rockstar)} />
          <div className={theme.name}>Rockstar</div>
        </div>
      </div>
    );
  }
}

