# Solo Leveling Fitness - Component Plan

Our app lets users view workout templates, create or edit them, and browse exercises. We split the pages into larger components and smaller reusable components.

## Components and ownership

*Replace Member 2 and Member 3 with your teammates' names. This is a suggested 3-person split; confirm it with your team.*

| Component | Type | Folder (inside `src/app/`) | Owner |
|---|---|---|---|
| TemplateForm | Page | `features/templates/components/template-form/` | Me |
| DaySelector | Child | `features/templates/components/day-selector/` | Me |
| SelectedExerciseList | Child | `features/templates/components/selected-exercise-list/` | Me |
| Dashboard | Page | `features/dashboard/components/dashboard/` | Member 2 |
| WeeklySchedule | Child | `features/dashboard/components/weekly-schedule/` | Member 2 |
| TemplateDetail | Page | `features/templates/components/template-detail/` | Member 2 |
| TemplateCard | Child | `shared/components/template-card/` | Member 2 |
| ExerciseList | Page | `features/exercises/components/exercise-list/` | Member 3 |
| ExerciseDetail | Page | `features/exercises/components/exercise-detail/` | Member 3 |
| ExerciseCard | Child | `shared/components/exercise-card/` | Member 3 |
| MuscleGroupFilter | Child | `shared/components/muscle-group-filter/` | Member 3 |

## Component hierarchy

```text
Dashboard (page)
  - WeeklySchedule
  - TemplateCard
TemplateForm (page)
  - DaySelector
  - ExerciseCard
  - MuscleGroupFilter
  - SelectedExerciseList
TemplateDetail (page)
  - ExerciseCard
ExerciseList (page)
  - MuscleGroupFilter
  - ExerciseCard
ExerciseDetail (page)
```

## Data used by components

```typescript
interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  imageUrl?: string;
}

interface WorkoutTemplate {
  id: string;
  name: string;
  dayOfWeek: string;
  exercises: Exercise[];
}
```

- `TemplateForm` uses a `WorkoutTemplate` and a list of `Exercise` items; it saves template changes.
- `DaySelector` takes the selected day and sends back a new day.
- `SelectedExerciseList` takes `Exercise[]` and sends back the ID of an exercise to remove.
- `Dashboard` and `WeeklySchedule` show workout templates by day.
- `TemplateDetail` and `TemplateCard` display `WorkoutTemplate` data.
- `ExerciseList`, `ExerciseDetail`, and `ExerciseCard` display `Exercise` data; cards can send back a selected exercise ID.
- `MuscleGroupFilter` takes the current filter and sends back the selected muscle group.

## Planned routes

| URL | Component |
|---|---|
| `/dashboard` | Dashboard |
| `/templates/new` | TemplateForm |
| `/templates/:id/edit` | TemplateForm |
| `/templates/:id` | TemplateDetail |
| `/exercises` | ExerciseList |
| `/exercises/:id` | ExerciseDetail |

For now, my three template components have been generated and display placeholder text. The other components and routes will be added as the team works on them.
