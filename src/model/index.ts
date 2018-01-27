
import { Model } from 'model/interfaces';
import { profile } from 'model/profile';
import { jobHistory } from 'model/job-history';
import { skills } from 'model/skills';

export const model: Model = {
  profile,
  jobHistory,
  skills,

  links: {
    github: 'https://github.com/surprised-cat',
    linkedin: 'https://www.linkedin.com/in/andrey-lavrov-399777124'
  }
};
