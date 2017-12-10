import * as icons from "./icons.css";

export interface Stat {
  name: string;
  value: string | number;
}

export interface Skill {
  name: string;
  level: string;
  iconClass: string;
}

interface Model {
  profile: {
    general: Stat[],
    additional: Stat[],
  };
  skills: {
    frontend: {
      hot: Skill[];
      cold: Skill[]
    }
    backend: {
      hot: Skill[];
      cold: Skill[]
    }
  };
}

export const model: Model = {
  profile: {
    general: [
      {
        name: "First name",
        value: "Andrey"
      },
      {
        name: "Last name",
        value: "Lavrov"
      },
      {
        name: "Age",
        value: 21
      },
      {
        name: "Location",
        value: "Kharkov"
      },
      {
        name: "Company",
        value: "Simcord"
      },
    ],
    additional: [
      {
        name: "Primary specialization",
        value: "Frontend developer"
      },
      {
        name: "Level",
        value: "Middle+"
      },
      {
        name: "Secondary specialization",
        value: "Backend developer (Node.js)"
      },
      {
        name: "Additional interests",
        value: "AI"
      },
      {
        name: "English",
        value: "Intermediate"
      }
    ]
  },

  skills: {
    frontend: {
      hot: [
        {
          name: "JavaScript",
          level: "Expert",
          iconClass: icons.js
        },
        {
          name: "CSS3",
          level: "High",
          iconClass: icons.css
        },
        {
          name: "HTML5",
          level: "Intermediate",
          iconClass: icons.html5
        },
        {
          name: "TypeScript",
          level: "High",
          iconClass: icons.ts
        },
        {
          name: "React.js",
          level: "High",
          iconClass: icons.react
        },
        {
          name: "Redux.js",
          level: "High",
          iconClass: icons.redux
        },
        {
          name: "Webpack",
          level: "High",
          iconClass: icons.webpack
        },
      ],
      cold: [
        {
          name: "Ember.js",
          level: "High",
          iconClass: icons.ember
        },
        {
          name: "Angular.js (1.x.x)",
          level: "Low",
          iconClass: icons.angular
        },
      ]
    },
    backend: {
      hot: [
        {
          name: "Node.js",
          level: "Intermediate",
          iconClass: icons.node
        },
        {
          name: "Express.js",
          level: "Intermediate",
          iconClass: icons.express
        },
        {
          name: "MySQL",
          level: "Low+",
          iconClass: icons.mysql
        },
        {
          name: "Python",
          level: "Intermediate",
          iconClass: icons.python
        },
      ],
      cold: [
        {
          name: "Java",
          level: "Intermediate",
          iconClass: icons.java
        },
        {
          name: "Spring",
          level: "Intermediate",
          iconClass: icons.spring
        },

      ],
    }
  }
};
