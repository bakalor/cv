import * as React from "react";
import * as theme from "./theme.css";
import { TechStackCard } from "scenes/stack/components/skill-card";
import { model } from "model";

export class FrontendStack extends React.PureComponent {
  render() {
    return <div className={theme.grid}>
      <div className={theme.col}>
        <TechStackCard
          type="hot"
          skills={model.skills.frontend.hot} />
      </div>
      <div className={theme.col}>
        <TechStackCard
          type="cold"
          skills={model.skills.frontend.cold} />
      </div>
    </div>;
  }
}
