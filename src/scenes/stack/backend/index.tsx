import * as React from "react";
import * as theme from "./theme.css";
import { SkillCard } from "scenes/stack/components/skill-card";
import { model } from "model";

export class BackendStack extends React.PureComponent {
  render() {
    return <div className={theme.wrapper}>
      <div className={theme.grid}>
        <div className={theme.col}>
          <SkillCard
            name="Hot stack"
            skills={model.skills.backend.hot} />
        </div>
        <div className={theme.col}>
          <SkillCard
            name="Cold stack"
            skills={model.skills.backend.cold} />
        </div>
      </div>
    </div>;
  }
}
