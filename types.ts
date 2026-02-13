
export enum AppStage {
  INVITATION = 'INVITATION',
  SUCCESS = 'SUCCESS',
  MEMORIES = 'MEMORIES',
  POEM = 'POEM'
}

export interface Memory {
  id: string;
  caption: string;
  imageUrl?: string;
}
