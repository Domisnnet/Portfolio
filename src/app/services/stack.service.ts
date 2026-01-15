import { Injectable } from '@angular/core';
import { STACK_CONFIG, PillCategory, StackKey } from '../constants/project-tags.config';

@Injectable({ providedIn: 'root' })
export class StackService {
  private readonly stackByCategory: Record<PillCategory, StackKey[]> = {
    frontend: [
      'html5',
      'css3',
      'sass',
      'javascript',
      'angular',
      'react',
      'vue',
      'bootstrap',
      'tailwind',
    ],
    backend: ['node', 'express', 'python'],
    databases: ['mongodb', 'mysql'],
    devops: ['github', 'vscode', 'vercel', 'npm'],
    cms: ['wordpress'],
  };

  getStack(category: PillCategory) {
    return this.stackByCategory[category].map(key => ({
      key,
      ...STACK_CONFIG[key],
    }));
  }
}