import * as React from 'react';
import { connect } from 'react-redux';
import * as theme from './theme.css';
import * as cn from 'classnames';
import { Pie } from 'scenes/profile/components/general/pie';
import { model } from 'model';
import { DeviceType, AppState } from 'store';
import { ProfileAvatar } from './avatar';
import { Collapse } from 'react-collapse';
import { PieDescription } from './pie-description';

interface ConnectedProps {
  layout: DeviceType;
}

type Props = ConnectedProps;

interface State {
  isChartSectionOpened: boolean;
}
export class GeneralInfoCardClass extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);

    const {
      layout,
    } = props;

    this.state = {
      isChartSectionOpened: layout !== 'mobile',
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    const {
      layout,
    } = nextProps;

    this.setState({
      isChartSectionOpened: layout !== 'mobile',
    })
  }

  render() {

    const {
      layout,
    } = this.props;

    const {
      isChartSectionOpened,
    } = this.state;

    return <div className={theme.card}>
      <div className={theme.col}>
        {this.renderGeneralInfo()}
        {this.renderAdditionalInfo()}
      </div>

      <div className={theme.col}>
        <div
          className={theme.chartTitle}
          onClick={() => this.setState({
            isChartSectionOpened: !isChartSectionOpened
          })}
        >
          <div className={theme.text}>
            Programmer type chart
          </div>
          <div className={cn(theme.iconCollapse, {
            [theme.opened]: isChartSectionOpened,
          })} />

        </div>
        {
          layout === 'mobile'
            ? (
              <Collapse isOpened={this.state.isChartSectionOpened}>
                {this.renderPie()}
              </Collapse>
            )
            : this.renderPie()
        }
      </div>
    </div>;
  }

  private renderGeneralInfo() {
    return (
      <div className={theme.generalInfo}>
        <ProfileAvatar />
        <div className={theme.generalStats}>
          {
            model.profile.general.map(
              (stat, index) =>
                <div key={index} className={theme.item}>
                  <div className={theme.name}>{stat.name}</div>
                  <div className={theme.value}>{stat.value}</div>
                </div>
            )
          }

        </div>
      </div>
    );
  }

  private renderAdditionalInfo() {
    return (
      <div className={theme.additionalInfo}>
        {
          model.profile.additional.map(
            (stat, index) =>
              <div key={index} className={theme.item}>
                <div className={theme.name}>{stat.name}</div>
                <div className={theme.value}>{stat.value}</div>
              </div>
          )
        }
      </div>
    )
  }

  private renderPie() {
    return (
      [
        <Pie />,
        <PieDescription />
      ]
    )
  }
}

export const GeneralInfoCard = connect<ConnectedProps, {}, {}, AppState>(
  state => ({
    layout: state.layout.deviceType,
  })
)(GeneralInfoCardClass);