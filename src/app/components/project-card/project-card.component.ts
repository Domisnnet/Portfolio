import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackPillComponent } from '../stack-pill/stack-pill.component';
import { TAG_CONFIG, StackPillData } from '../../constants/project-tags.config';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, StackPillComponent],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  @Input() index?: number;
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