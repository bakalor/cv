import * as React from 'react';
import * as d3pie from 'd3pie';
import {connect} from 'react-redux';
import { pieOptions } from 'scenes/profile/components/general/pie/pie-options';
import * as theme from './theme.css';
import { DeviceType, AppState } from 'store';
import { ProgrammerTypeChartLegend } from './legend';

interface ConnectedProps {
  deviceType: DeviceType;
}

type Props = ConnectedProps;

export class PieClass extends React.PureComponent<Props> {

  private _chart?: HTMLElement;

  componentDidMount() {
    const {
      deviceType,
    } = this.props;

    let processedOptions = pieOptions;

    if(deviceType === 'mobile') {
      processedOptions = {
        ...pieOptions,
        size: {
          canvasWidth: 300,
          canvasHeight: 300,
          pieOuterRadius: 140,
          pieInnerRadius: 20
        }
      }
    }

    new d3pie(this._chart!, (processedOptions as any));
  }

  render() {
    return <div>
    
      <div className={theme.pie} ref={r => this._chart = r!} />
      <ProgrammerTypeChartLegend />
    </div>;
  }
}

export const Pie = connect<ConnectedProps, {}, {}, AppState>(
  state => ({
    deviceType: state.layout.deviceType,
  })
)(PieClass)
