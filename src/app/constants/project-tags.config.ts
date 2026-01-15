export type PillCategory =
  | 'frontend'
  | 'backend'
  | 'databases'
  | 'devops'
  | 'cms';

export interface StackPillData {
  label: string;
  iconPath: string;
  category: PillCategory;
}

/* =========================
  STACK CONFIG 
========================= */
export const STACK_CONFIG = {
  /* FRONTEND */
  html5: { label: 'HTML5', iconPath: 'assets/icons/html5.svg', category: 'frontend' },
  css3: { label: 'CSS3', iconPath: 'assets/icons/css3.svg', category: 'frontend' },
  sass: { label: 'Sass', iconPath: 'assets/icons/sass.svg', category: 'frontend' },
  javascript: { label: 'JavaScript', iconPath: 'assets/icons/javascript.svg', category: 'frontend' },
  angular: { label: 'Angular', iconPath: 'assets/icons/angular.svg', category: 'frontend' },
  react: { label: 'React', iconPath: 'assets/icons/react.svg', category: 'frontend' },
  vue: { label: 'Vue.js', iconPath: 'assets/icons/vue-js.svg', category: 'frontend' },
  bootstrap: { label: 'Bootstrap', iconPath: 'assets/icons/bootstrap.svg', category: 'frontend' },
  tailwind: { label: 'Tailwind', iconPath: 'assets/icons/tailwind.svg', category: 'frontend' },

  /* BACKEND */
  node: { label: 'Node.js', iconPath: 'assets/icons/node-js.svg', category: 'backend' },
  express: { label: 'Express', iconPath: 'assets/icons/express.svg', category: 'backend' },
  python: { label: 'Python', iconPath: 'assets/icons/python.svg', category: 'backend' },

  /* DATABASES */
  mongodb: { label: 'MongoDB', iconPath: 'assets/icons/mongodb.svg', category: 'databases' },
  mysql: { label: 'MySQL', iconPath: 'assets/icons/mysql.svg', category: 'databases' },

  /* DEVOPS */
  github: { label: 'GitHub', iconPath: 'assets/icons/github.svg', category: 'devops' },
  vscode: { label: 'VSCode', iconPath: 'assets/icons/vscode.svg', category: 'devops' },
  vercel: { label: 'Vercel', iconPath: 'assets/icons/vercel.svg', category: 'devops' },
  npm: { label: 'NPM', iconPath: 'assets/icons/npm.svg', category: 'devops' },

  /* CMS */
  wordpress: { label: 'WordPress', iconPath: 'assets/icons/wordpress.svg', category: 'cms' },
} as const;

export type StackKey = keyof typeof STACK_CONFIG;