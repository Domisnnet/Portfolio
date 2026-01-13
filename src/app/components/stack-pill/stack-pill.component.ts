import { Component, Input, HostBinding } from '@angular/core';
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
  @Input() iconPath!: string;
  @Input() category!: 'frontend' | 'backend' | 'databases' | 'devops' | 'cms';

  @HostBinding('class')
  get hostClass(): string {
    return this.category;
  }
}