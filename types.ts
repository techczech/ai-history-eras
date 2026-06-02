export interface TimelineEvent {
  label: string;
}

export interface Era {
  id: string;
  title: string;
  period: string;
  shortPeriod: string; // Used for compact views
  description: string[]; // Array of paragraphs
  events: TimelineEvent[];
}

export interface AppData {
  title: string;
  author: string;
  eras: Era[];
}