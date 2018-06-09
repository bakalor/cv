import * as React from 'react';
import * as theme from './theme.css';
import Scrollbars from 'react-custom-scrollbars';

interface PassedProps {
  horizontal?: boolean;
  className?: string;
}
export class ScrollbarsAdapter extends React.PureComponent<PassedProps> {
  render() {
    return <Scrollbars
      autoHeight={true}
      autoHeightMax={320}
      renderThumbVertical={this.renderScroll}
      className={this.props.className}
      renderThumbHorizontal={this.renderScroll}>
      {this.props.children}
    </Scrollbars>;
  }

  private renderScroll = ({ ...props }) => <div className={theme.scroll} {...props} />;
}
