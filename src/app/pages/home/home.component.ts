import { Component } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { StackService } from '../../services/stack.service';
import { PillCategory } from '../../constants/project-tags.config';
import { StackPillComponent } from '../../components/stack-pill/stack-pill.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    TitleCasePipe,
    StackPillComponent,
  ],
})
export class HomeComponent {

  readonly categories: readonly PillCategory[] = [
    'frontend',
    'backend',
    'databases',
    'devops',
    'cms',
  ];

  constructor(public readonly stackService: StackService) {}
}