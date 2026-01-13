import { Component, Input } from '@angular/core';

type PillCategory =
  | 'frontend'
  | 'backend'
  | 'databases'
  | 'devops'
  | 'cms';

interface StackPillData {
  label: string;
  iconPath: string;
  category: PillCategory;
}

const TAG_CONFIG: Record<string, StackPillData> = {
  /* =========================
    FRONTEND
  ========================= */
  Angular: {
    label: 'Angular',
    iconPath: 'assets/icons/angular.svg',
    category: 'frontend',
  },
  'Vue.js': {
    label: 'Vue.js',
    iconPath: 'assets/icons/vue-js.svg',
    category: 'frontend',
  },
  JavaScript: {
    label: 'JavaScript',
    iconPath: 'assets/icons/javascript.svg',
    category: 'frontend',
  },
  'Tailwind.CSS': {
    label: 'Tailwind.CSS',
    iconPath: 'assets/icons/tailwind-css.svg',
    category: 'frontend',
  },
  HTML5: {
    label: 'HTML5',
    iconPath: 'assets/icons/html5.svg',
    category: 'frontend',
  },
  CSS3: {
    label: 'CSS3',
    iconPath: 'assets/icons/css3.svg',
    category: 'frontend',
  },

  /* =========================
    BACKEND / INFRA
  ========================= */
  Firebase: {
    label: 'Firebase',
    iconPath: 'assets/icons/firebase.svg',
    category: 'backend',
  },
  GitHub: {
    label: 'GitHub',
    iconPath: 'assets/icons/github.svg',
    category: 'devops',
  },

  /* =========================
    CONCEITUAIS / VISUAIS
  ========================= */
  UX: {
    label: 'UX',
    iconPath: 'assets/icons/ux.svg',
    category: 'frontend',
  },
  Design: {
    label: 'Design',
    iconPath: 'assets/icons/design.svg',
    category: 'frontend',
  },
  Architecture: {
    label: 'Architecture',
    iconPath: 'assets/icons/architecture.svg',
    category: 'backend',
  },
  Animation: {
    label: 'Animation',
    iconPath: 'assets/icons/animation.svg',
    category: 'frontend',
  },
};

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project!: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
  };

  isFlipped = false;

  toggleFlip(): void {
    this.isFlipped = !this.isFlipped;
  }

  resolvePill(tag: string): StackPillData {
    return (
      TAG_CONFIG[tag] ?? {
        label: tag,
        iconPath: 'assets/icons/default.svg',
        category: 'frontend',
      }
    );
  }
}