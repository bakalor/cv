import * as icons from 'model/icons.css';

export const jobHistory = [
  {
    company: 'EPAM Systems',
    period: 'February 2018 - Currently working',
    position: 'Middle frontend developer',
    logoClass: icons.epam,
    details: [],
  },
  {
    company: 'Simcord',
    period: 'July 2017 - February 2018',
    position: 'Middle frontend developer',
    logoClass: icons.simcord,

    details: [
      {
        jobPosition: 'Frontend developer',
        teamSize: 1,
        customer: 'Crypto currency exchange company [NDA]',
        role: 'Lead developer',
        description: `
          Web UI for management investment accounts, trading statistics displaying and trade signals coping.
        `,
        responsibleFor: [
          'Server side rendering implementation',
          'Markup and JavaScript implementation basing on design',
          'Build pipeline configuration',
          'Documentation maintaining',
          'Development of the complex plotting system based on d3 and flot.js libraries',
          'Working with currencies on client side with big.js library',
          'Server side rendering implementation',
        ],
        tools: [
          'node',
          'npm',
          'webpack',
          'postCSS',
          'typescript',
        ],
        technologies: [
          'react',
          'redux',
          'd3',
          'express.js',
        ],
      },
    ],
  },
  {
    company: 'Teamdev',
    period: 'Sep 2015 - July 2017',
    position: 'Junior frontend developer',
    logoClass: icons.teamdev,

    details: [
      {
        jobPosition: 'Frontend developer',
        teamSize: 12,
        customer: 'Network technologies company [NDA]',
        role: 'Developer',
        description: 'Web UI for the network devices configuration (Routers, Firewalls).',
        responsibleFor: [
          'Component design and implementation',
          'Client-Server Web Applications Testing (90% test coverage)',
          'Custom build pipeline creation. Implement approach to build application as separate screens that can be embedded into another apps',
          'Keeping mock server actual compared to the real remote servers',
        ],
        tools: [
          'node',
          'npm',
          'Less',
        ],
        technologies: [
          'Ember.js',
          'd3',
          'express.js',
        ],
      },
      {
        jobPosition: 'Frontend developer',
        teamSize: 10,
        customer: 'R&D Companies [NDA]',
        role: 'Developer',
        description: `Web UI for management scientific data connected with spektroskopi investigation.
        As a feature can be highlighted a very huge size of displaying data, that required creation the 2d infinity tables
        with on demand data preloading and optimized rendering.
        `,
        responsibleFor: [
          'JavaScript implementation of screens basing on provided design',
          'Continuous refactoring to component-based approach to prepare project for migration to Angular 2.x',
          'Keeping consistent with existing project architecture',
          'Technical documentation writing',
        ],
        tools: [
          'node',
          'npm',
          'Google closure compiler',
          'Grant',
          'Less',
        ],
        technologies: [
          'angular 1.3',
          'tree.js',
        ],
      },
    ],
  },
];
