/** An exercise as returned by the SoloFit API (GET /api/exercises). */
export interface Exercise {
  exerciseId: number;
  name: string;
  description?: string;
  bodyPart?: string;
  primaryMuscle?: string;
  secondaryMuscle?: string;
}
