import * as cn from 'classnames';
import * as React from 'react';
import * as d3pie from 'd3pie';
import { pieOptions } from 'scenes/profile/components/general/pie/pie-options';
import * as theme from './theme.css';


export class Pie extends React.PureComponent {
  private _chart: HTMLDivElement;

  componentDidMount() {
    new d3pie(this._chart, (pieOptions as any));
  }

  render() {
    return <div className={theme.wrapper}>
      <div className={theme.title}>Programmer type chart</div>
      <div className={theme.pie} ref={r => this._chart = r!} />
      <div className={theme.legend}>
        <div className={theme.col}>
          <div className={theme.item}>
            <div className={cn(theme.icon, theme.linear)} />
            <div className={theme.name}>Linear Programmer</div>
          </div>
          <div className={theme.item}>
            <div className={cn(theme.icon, theme.dealer)} />
            <div className={theme.name}>Dealer</div>
          </div>
        </div>
        <div className={theme.col}>
          <div className={theme.item}>
            <div className={cn(theme.icon, theme.bussines)} />
            <div className={theme.name}>Business Bullshitter</div>
          </div>
          <div className={theme.item}>
            <div className={cn(theme.icon, theme.rockstar)} />
            <div className={theme.name}>Rockstar</div>
          </div>
        </div>
      </div>
    </div>;
  }
}
