import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackPillComponent } from '../stack-pill/stack-pill.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, StackPillComponent],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})

export class ProjectCardComponent {
  @Input() project!: any;
  @Input({ required: true }) index!: number;
  isFlipped = signal(false);
  toggleFlip() {
    this.isFlipped.update(v => !v);
  }
  mapTag(tag: string): 'frontend' | 'backend' {
  const map: Record<string, 'frontend' | 'backend'> = {
    'Angular': 'frontend',
    'Vue.js': 'frontend',
    'JavaScript': 'frontend',
    'HTML5': 'frontend',
    'CSS3': 'frontend',
    'Tailwind.CSS': 'frontend',
    'Node.js': 'backend',
    'Firebase': 'backend'
  };

  return map[tag] ?? 'frontend';
  }
}