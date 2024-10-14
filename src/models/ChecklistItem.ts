export class ChecklistItem {
  id:string;
  title: string;
  descriptionComplete: string;
  descriptionPartial: string;
  descriptionIncomplete: string;
  currentState: 'complete' | 'partial' | 'incomplete';

  constructor(
    id: string,
    title: string,
    descriptionComplete: string,
    descriptionPartial: string,
    descriptionIncomplete: string,
    currentState: 'complete' | 'partial' | 'incomplete' = 'incomplete'
  ) {
    this.id = id;
    this.title = title;
    this.descriptionComplete = descriptionComplete;
    this.descriptionPartial = descriptionPartial;
    this.descriptionIncomplete = descriptionIncomplete;
    this.currentState = currentState;
  }

  getState(): string {
    switch (this.currentState) {
      case 'complete':
        return this.descriptionComplete;
      case 'partial':
        return this.descriptionPartial;
      case 'incomplete':
        return this.descriptionIncomplete;
      default:
        return '';
    }
  }

  setState(newState: 'complete' | 'partial' | 'incomplete'): void {
    this.currentState = newState;
  }
}
