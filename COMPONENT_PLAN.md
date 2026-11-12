# Component Plan & Task Distribution - SoloFit UI

## 1. Component Hierarchy & Folder Structure

### Feature Components
- `src/app/features/dashboard/` -> `DashboardComponent` (Main schedule grid & stats overview)
- `src/app/features/templates/components/create-template/` -> `CreateTemplateComponent`
- `src/app/features/templates/components/view-single-template/` -> `ViewSingleTemplateComponent` 
- `src/app/features/exercises/components/view-all-exercises/` -> `ViewAllExercisesComponent` (Search and category-filtered exercise library)
- `src/app/features/exercises/components/view-single-exercise/` -> `ViewSingleExerciseComponent` (Detailed instructional view with video and description)

### Shared Components
- `src/app/shared/components/navbar/` -> `NavbarComponent`
- `src/app/shared/components/footer/` -> `FooterComponent`
- `src/app/shared/components/exercise-card/` -> `ExerciseCardComponent`
- `src/app/shared/components/template-card/` -> `TemplateCardComponent`
- `src/app/shared/components/goal-card/` -> `GoalCardComponent`
- `src/app/shared/components/filter-tabs/` -> `FilterTabsComponent`

---

## 2. Team Task

- **Developer 1 (): Dashboard & Schedule Overview**
  - Owns: `DashboardComponent`, `GoalCardComponent`, `TemplateCardComponent`, and the main 4-day weekly workout schedule grid.
- **Developer 2 (): Template Creation & Form Handling**
  - Owns: `CreateTemplateComponent`, `ViewSingleTemplateComponent`, day selection error handling/validation states, and form input controls.
- **Developer 3 (): Exercise Library & Catalog Views**
  - Owns: `ViewAllExercisesComponent`, `ViewSingleExerciseComponent`, `ExerciseCardComponent`, `FilterTabsComponent`, and category filtering tabs.

---

## 3. Core Data Model Interfaces

```typescript
export interface Exercise {
  id: number;
  name: string;
  category: 'UPPER_BODY' | 'LOWER_BODY';
  videoUrl: string;
  description: string;
  primaryMuscle: string;
  secondaryMuscle: string;
}

export interface WorkoutTemplate {
  id: number;
  day: string;
  name: string;
  exercises: Exercise[];
}