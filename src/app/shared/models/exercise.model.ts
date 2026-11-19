/**
 * An exercise as returned by the SoloFit API (GET /SoloFit/api/exercises).
 * Matches the API's ExerciseDto; optional fields come back as null when the database has no value.
 */
export interface Exercise {
  exerciseId: number;
  name: string;
  description?: string | null;
  image?: string | null;
  video?: string | null;
  bodyPart?: string | null;
  primaryMuscle?: string | null;
  secondaryMuscle?: string | null;
}
