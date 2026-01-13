import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stack-pill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack-pill.component.html',
  styleUrls: ['./stack-pill.component.scss'],
})
export class StackPillComponent {
  @Input() label!: string;
  @Input() category!: 'frontend' | 'backend' | 'databases' | 'devops' | 'cms';
}