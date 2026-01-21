import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-lab-card',
  standalone: true,
  templateUrl: './project-lab-card.component.html',
  styleUrls: ['./project-lab-card.component.scss']
})
export class ProjectLabCardComponent {
  @Input() title = '';
  @Input() image = '';
}