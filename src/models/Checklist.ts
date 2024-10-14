import { ChecklistItem } from './ChecklistItem';

export class Checklist {
  title: string;
  items: ChecklistItem[];

  constructor(title: string, items: ChecklistItem[] = []) {
    this.title = title;
    this.items = items;
  }

  getCompletedCount(): number {
    return this.items.filter(item => item.currentState === 'complete').length;
  }

  getIncompleteCount(): number {
    return this.items.filter(item => item.currentState === 'incomplete').length;
  }

}
