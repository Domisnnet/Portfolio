import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PillCategory } from '../../constants/project-tags.config';

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
  label = input.required<string>();
  iconPath = input<string>();
  category = input<PillCategory>('frontend');
}
