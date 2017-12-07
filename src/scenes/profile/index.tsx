import * as React from "react";
import * as theme from "./theme.css";
import * as cn from "classnames";
import { GeneralInfoCard } from "scenes/profile/components/general";
import { ProjectCard } from "scenes/profile/components/project-card";
import { JobHistory } from "scenes/profile/components/job-history";

export class Profile extends React.PureComponent {
  render() {
    return <div className={theme.wrapper}>
      <div className={theme.grid}>
        <div className={theme.row}>
          <div className={theme.general}>
            <GeneralInfoCard />
          </div>
          <div className={theme.jobHistory}>
            <JobHistory />
          </div>
        </div>
        <div className={theme.title}>Sample projects list</div>
        <div className={cn(theme.row, theme.projects)}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
      </div>
    </div>;
  }
}
