import * as React from "react";
import * as theme from "./theme.css";
import { SkillCard } from "scenes/stack/components/skill-card";

const hotFrontend = [
  {
    name: "JavaScript",
    level: "Expert",
    iconClass: theme.js
  },
  {
    name: "CSS3",
    level: "High",
    iconClass: theme.css
  },
  {
    name: "HTML5",
    level: "Intermediate",
    iconClass: theme.html5
  },
  {
    name: "TypeScript",
    level: "High",
    iconClass: theme.ts
  },
  {
    name: "React.js",
    level: "High",
    iconClass: theme.react
  },
  {
    name: "Redux.js",
    level: "High",
    iconClass: theme.redux
  },
  {
    name: "Webpack",
    level: "High",
    iconClass: theme.webpack
  },
];
const coldFrontend = [
  {
    name: "Ember.js",
    level: "High",
    iconClass: theme.ember
  },
  {
    name: "Angular.js (1.x.x)",
    level: "Low",
    iconClass: theme.angular
  },
]
export class Stack extends React.PureComponent {
  render() {
    return <div className={theme.wrapper}>
      <div className={theme.grid}>
        <div className={theme.col}>
          <SkillCard
            name="Hot stack"
            skills={hotFrontend} />
        </div>
        <div className={theme.col}>
          <SkillCard
            name="Cold stack"
            skills={coldFrontend} />
        </div>
      </div>
    </div>;
  }
}
