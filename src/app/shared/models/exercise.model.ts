export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  category: 'Upper' | 'Lower';
  imageUrl?: string;
}