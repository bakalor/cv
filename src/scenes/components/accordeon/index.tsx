import * as React from 'react';
import * as theme from './theme.css';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export class Accordeon extends React.PureComponent {
  render() {
    return <ReactCSSTransitionGroup
      component="div"
      transitionName={{
        enter: theme.fadeIn,
        enterActive: theme.fadeInActive,
        leave: theme.fadeOut,
        leaveActive: theme.fadeOutActive
      }}
      transitionLeave={true}
      transitionEnter={true}
      transitionLeaveTimeout={300}
      transitionEnterTimeout={300}>
      {this.props.children}
    </ReactCSSTransitionGroup>;
  }
}
