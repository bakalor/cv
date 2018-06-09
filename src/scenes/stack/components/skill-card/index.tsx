import * as React from 'react';
import * as theme from './theme.css';
import * as cn from 'classnames';
import { TooltipAdapter } from 'scenes/components/tooltip-adapter';
import { Skill } from 'model/interfaces';

interface PassedProps {
  type: 'hot' | 'cold';
  skills: Skill[];
}

const _stackNames: { [key: string]: string } = {
  hot: 'Hot stack',
  cold: 'Cold stack',
};

const _hints: { [key: string]: string } = {
  hot: 'No knowledges recovery time required',
  cold: 'It will require some time to recover knowledges',
};

export class TechStackCard extends React.PureComponent<PassedProps> {
  render() {
    const {
      type,
      skills,
    } = this.props;

    return <div className={theme.wrapper}>
      <div className={theme.header}>
        <div className={theme.title}>
          {_stackNames[type]}
        </div>
        <TooltipAdapter content={_hints[type]} />
      </div>
      <div className={theme.body}>
        {skills.map(skill => <div className={theme.row}>
          <div className={cn(theme.icon, skill.iconClass)}></div>
          <div className={theme.name}>{skill.name}</div>
          <div className={theme.level}>{skill.level}</div>
        </div>)}
      </div>
    </div>;
  }
}
