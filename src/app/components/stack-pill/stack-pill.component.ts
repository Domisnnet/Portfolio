import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TAG_CONFIG, PillCategory } from '../../constants/project-tags.config';

@Component({
  selector: 'app-stack-pill',
  templateUrl: './stack-pill.component.html',
  styleUrls: ['./stack-pill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.data-category]': 'category()'
  }
})
export class StackPillComponent {
  tag = input.required<string>();

  pill = computed(() => TAG_CONFIG[this.tag()]);

  label = computed(() => this.pill()?.label ?? this.tag());
  iconPath = computed(() => this.pill()?.iconPath);
  category = computed<PillCategory>(() => this.pill()?.category ?? 'frontend');
}