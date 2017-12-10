import * as React from "react";
import * as theme from "./theme.css";
import * as cn from "classnames";
import { Skill } from "model";


interface PassedProps {
  name: string;
  skills: Skill[];
}

export class SkillCard extends React.PureComponent<PassedProps> {
  render() {
    return <div className={theme.wrapper}>
      <div className={theme.header}>
        <div className={theme.title}>
          {this.props.name}
        </div>
      </div>
      <div className={theme.body}>
        {this.props.skills.map(skill => <div className={theme.row}>
          <div className={cn(theme.icon, skill.iconClass)}></div>
          <div className={theme.name}>{skill.name}</div>
          <div className={theme.level}>{skill.level}</div>
        </div>)}
      </div>
    </div>;
  }
}
