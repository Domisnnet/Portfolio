import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackPillComponent } from '../../components/stack-pill/stack-pill.component';
import { TAG_CONFIG, PillCategory } from '../../constants/project-tags.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StackPillComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  /* =========================
    STACK KEYS POR CATEGORIA
  ========================= */
  private stackKeys: Record<PillCategory, string[]> = {
    frontend: [
      'HTML5',
      'CSS3',
      'Sass',
      'JavaScript',
      'Angular',
      'React',
      'Vue.js',
      'Bootstrap',
      'Tailwind.CSS',
    ],
    backend: ['Node.js', 'Express', 'Python'],
    databases: ['MongoDB', 'MySQL'],
    devops: ['GitHub', 'VSCode', 'Vercel', 'NPM'],
    cms: ['WordPress'],
  };

  /* =========================
    STACK RESOLVIDA (SAFE)
  ========================= */
  stack = computed(() => {
    const result: Record<PillCategory, string[]> = {
      frontend: [],
      backend: [],
      databases: [],
      devops: [],
      cms: [],
    };

    for (const category in this.stackKeys) {
      result[category as PillCategory] = this.stackKeys[
        category as PillCategory
      ].filter(tag => tag in TAG_CONFIG);
    }

    return result;
  });

  TAG_CONFIG = TAG_CONFIG; 
}