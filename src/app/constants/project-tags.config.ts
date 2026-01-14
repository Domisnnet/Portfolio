export type PillCategory = 'frontend' | 'backend' | 'databases' | 'devops' | 'cms';

export interface StackPillData {
  label: string;
  iconPath: string;
  category: PillCategory;
}

export const TAG_CONFIG: Record<string, StackPillData> = {
  /* =========================
    FRONTEND
  ========================= */
  Angular: { label: 'Angular', iconPath: 'assets/icons/angular.svg', category: 'frontend' },
  Bootstrap: { label: 'Bootstrap', iconPath: 'assets/icons/bootstrap.svg', category: 'frontend' },
  CSS3: { label: 'CSS3', iconPath: 'assets/icons/css3.svg', category: 'frontend' },
  'CSS Animations': { label: 'CSS Animations', iconPath: 'assets/icons/css-animations.svg', category: 'frontend' },
  HTML5: { label: 'HTML5', iconPath: 'assets/icons/html5.svg', category: 'frontend' },
  JavaScript: { label: 'JavaScript', iconPath: 'assets/icons/javascript.svg', category: 'frontend' },
  Motions: { label: 'Motions', iconPath: 'assets/icons/motions.svg', category: 'frontend' },
  React: { label: 'React', iconPath: 'assets/icons/react.svg', category: 'frontend' },
  Sass: { label: 'Sass', iconPath: 'assets/icons/sass.svg', category: 'frontend' },
  SCSS: { label: 'SCSS', iconPath: 'assets/icons/scss.svg', category: 'frontend' },
  SPA: { label: 'SPA', iconPath: 'assets/icons/spa.svg', category: 'frontend' },
  SVG: { label: 'SVG', iconPath: 'assets/icons/svg.svg', category: 'frontend' },
  Tailwind: { label: 'Tailwind', iconPath: 'assets/icons/tailwind.svg', category: 'frontend' },
  'Tailwind.CSS': { label: 'Tailwind.CSS', iconPath: 'assets/icons/tailwind-css.svg', category: 'frontend' },
  'Vue.js': { label: 'Vue.js', iconPath: 'assets/icons/vue-js.svg', category: 'frontend' },

  /* =========================
    BACKEND / INFRA
  ========================= */
  API: { label: 'API', iconPath: 'assets/icons/api.svg', category: 'backend' },
  Architecture: { label: 'Architecture', iconPath: 'assets/icons/architecture.svg', category: 'backend' },
  Express: { label: 'Express', iconPath: 'assets/icons/express.svg', category: 'backend' },
  Firebase: { label: 'Firebase', iconPath: 'assets/icons/firebase.svg', category: 'backend' },
  'Game Logic': { label: 'Game Logic', iconPath: 'assets/icons/game-logic.svg', category: 'backend' },
  'Node.js': { label: 'Node.js', iconPath: 'assets/icons/node-js.svg', category: 'backend' },
  Python: { label: 'Python', iconPath: 'assets/icons/python.svg', category: 'backend' },

  /* =========================
    DATABASES
  ========================= */
  MongoDB: { label: 'MongoDB', iconPath: 'assets/icons/mongodb.svg', category: 'databases' },
  MySQL: { label: 'MySQL', iconPath: 'assets/icons/mysql.svg', category: 'databases' },

  /* =========================
    DEVOPS
  ========================= */
  Automation: { label: 'Automation', iconPath: 'assets/icons/automation.svg', category: 'devops' },
  GitHub: { label: 'GitHub', iconPath: 'assets/icons/github.svg', category: 'devops' },
  NPM: { label: 'NPM', iconPath: 'assets/icons/npm.svg', category: 'devops' },
  Vercel: { label: 'Vercel', iconPath: 'assets/icons/vercel.svg', category: 'devops' },
  VSCode: { label: 'VSCode', iconPath: 'assets/icons/vscode.svg', category: 'devops' },

  /* =========================
    CMS
  ========================= */
  WordPress: { label: 'WordPress', iconPath: 'assets/icons/wordpress.svg', category: 'cms' },

  /* =========================
    CONCEITUAIS / VISUAIS
  ========================= */
  Design: { label: 'Design', iconPath: 'assets/icons/design.svg', category: 'frontend' },
  Product: { label: 'Product', iconPath: 'assets/icons/product.svg', category: 'frontend' },
  UI: { label: 'UI', iconPath: 'assets/icons/ui.svg', category: 'frontend' },
  UX: { label: 'UX', iconPath: 'assets/icons/ux.svg', category: 'frontend' },
};