import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackPillComponent } from '../stack-pill/stack-pill.component';
import { TAG_CONFIG, StackPillData } from '../../constants/project-tags.config';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule, StackPillComponent],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--delay]': 'index()'
  }
})
export class ProjectCardComponent {
  project = input.required<Project>();
  index = input<number>();

  isFlipped = signal(false);

  sortedPills = computed(() => {
    const tags = this.project().tags.slice().sort();

    return tags.map(tag => TAG_CONFIG[tag as keyof typeof TAG_CONFIG] ?? {
      label: tag,
      iconPath: 'assets/icons/default.svg',
      category: 'frontend',
    });
  });

  toggleFlip(): void {
    this.isFlipped.update(v => !v);
  }
}
