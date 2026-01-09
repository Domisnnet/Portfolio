import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-stack-pill',
  standalone: true,
  imports: [],
  templateUrl: './stack-pill.html',
  styleUrl: './stack-pill.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackPillComponent {
  name = input.required<string>();
  icon = input<string>();
}
