import * as React from 'react';
import * as css from './theme.css';
import * as cn from 'classnames';
import { model } from 'model';

export class SideBarFooter extends React.PureComponent {
  render() {
    return <div className={css.footer}>
      <div className={css.text}>Find me in soshial networks:</div>
      <div className={css.links}>
        <a href={model.links.github} className={cn(css.link, css.github)}></a>
        <a href={model.links.linkedin} className={cn(css.link, css.linkedin)}></a>
      </div>
    </div>;
  }
}
