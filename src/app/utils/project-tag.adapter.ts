import { TAG_CONFIG, StackPillData } from '../constants/project-tags.config';

export function resolveTag(tag: string): StackPillData {
  return (
    TAG_CONFIG[tag] ?? {
      label: tag,
      iconPath: 'assets/icons/default.svg',
      category: 'frontend',
    }
  );
}