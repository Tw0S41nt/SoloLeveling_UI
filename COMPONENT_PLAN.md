# SoloFit UI – Component Plan

How our five wireframes (Dashboard, View All Exercises, View Single Exercise, View Single Template, Create Template) break down into standalone Angular components, and who owns each one for Homeworks 4–6.

## Folder conventions

- **Feature screens (containers):** `src/app/features/<feature>/components/<name>/`. Routed, load data from the API, handle route params, pass data down to children.
- **Shared widgets (presentational):** `src/app/shared/components/<name>/`. Receive data through `input()`, emit events through `output()`, no API calls. Used by more than one screen.
- **Feature-only children:** live next to their screen in the same feature folder.
- **Data models:** `src/app/shared/models/`. One interface file per entity (see the Data models section).

## Component hierarchy

```
App (app.ts)
├── Navbar                (shared, layout)   logo + search bar on every screen
├── <router-outlet>
│   ├── Dashboard         /dashboard         (container)
│   │   ├── WeeklySchedule                   day columns with their exercises
│   │   ├── GoalCard                         user's goal + motivating line
│   │   └── TemplateCard ×n                  (shared)
│   ├── ExerciseList      /exercises         (container)
│   │   ├── BodyPartFilter                   (shared) All / Upper / Lower
│   │   └── ExerciseCard ×n                  (shared)
│   ├── ExerciseDetail    /exercises/:id     (container)
│   │   └── ExerciseCard ×3                  (shared) recommendations
│   ├── TemplateDetail    /templates/:id     (container)
│   │   ├── TemplateExerciseItem ×n          video, name, muscle, description
│   │   └── TemplateCard ×n                  (shared) other templates
│   └── TemplateForm      /templates/new     (container)
│       ├── DaySelector                      required day dropdown
│       ├── BodyPartFilter                   (shared)
│       ├── ExerciseCard ×n                  (shared) click to add
│       └── SelectedExercises                sidebar list, remove, submit
└── Footer                (shared, layout)
```

## Routes (`src/app/app.routes.ts`)

| Path | Component | Owner |
|---|---|---|
| `''` | redirect to `dashboard` | – |
| `/dashboard` | `Dashboard` | Kamboj |
| `/exercises` | `ExerciseList` | Rached Alvarez |
| `/exercises/:id` | `ExerciseDetail` | Rached Alvarez |
| `/templates/new` | `TemplateForm` | Huang |
| `/templates/:id` | `TemplateDetail` | Kamboj |

`/templates/new` must be listed **before** `/templates/:id` so "new" isn't read as an id. Until Dashboard is merged, `''` redirects to `exercises`.

## Ownership

Each of us owns at least one major screen plus the widgets it needs.

### Santiago Rached Alvarez – Exercise library

| Component | Path | Type | Inputs / outputs |
|---|---|---|---|
| `ExerciseList` | `features/exercises/components/exercise-list` | Container, `/exercises` | Loads `Exercise[]`; filters by selected body part |
| `ExerciseDetail` | `features/exercises/components/exercise-detail` | Container, `/exercises/:id` | Reads `:id`; loads one `Exercise` + recommendations |
| `ExerciseCard` | `shared/components/exercise-card` | Presentational | `input exercise: Exercise` · `output selected: Exercise` |
| `BodyPartFilter` | `shared/components/body-part-filter` | Presentational | `input selected: BodyPartFilterOption` · `output selectedChange: BodyPartFilterOption` |

### Nitin Kamboj – Dashboard and template viewing

| Component | Path | Type | Inputs / outputs |
|---|---|---|---|
| `Dashboard` | `features/dashboard/components/dashboard` | Container, `/dashboard` | Loads the user, their `Template[]` |
| `WeeklySchedule` | `features/dashboard/components/weekly-schedule` | Presentational | `input templates: Template[]` |
| `GoalCard` | `features/dashboard/components/goal-card` | Presentational | `input goal: string` |
| `TemplateDetail` | `features/templates/components/template-detail` | Container, `/templates/:id` | Reads `:id`; loads one `Template` + other templates |
| `TemplateExerciseItem` | `features/templates/components/template-exercise-item` | Presentational | `input exercise: Exercise` |
| `TemplateCard` | `shared/components/template-card` | Presentational | `input template: Template` · `output selected: Template` |

### Huang (RabidNinja) – Template builder and app shell

| Component | Path | Type | Inputs / outputs |
|---|---|---|---|
| `TemplateForm` | `features/templates/components/template-form` | Container, `/templates/new` | Builds a `TemplateRequest`; POSTs it |
| `DaySelector` | `features/templates/components/day-selector` | Presentational | `input day: string` · `output dayChange: string`; shows the required-field warning |
| `SelectedExercises` | `features/templates/components/selected-exercises` | Presentational | `input exercises: Exercise[]` · `output remove: Exercise` · `output submit: void` |
| `Navbar` | `shared/components/navbar` | Layout | `output search: string` |
| `Footer` | `shared/components/footer` | Layout | none |

`TemplateForm` reuses `ExerciseCard` and `BodyPartFilter`, so those inputs/outputs should stay stable once Homework 4 starts.

## Data models

These match the JSON our SoloFit API returns (`docs/api-routes.md` in the API repo). They go in `src/app/shared/models/`.

```ts
// exercise.model.ts
export interface Exercise {
  exerciseId: number;
  name: string;
  description?: string;
  image?: string;
  video?: string;
  bodyPart?: string;
  primaryMuscle?: string;
  secondaryMuscle?: string;
}

export type BodyPartFilterOption = 'all' | 'upper' | 'lower';

// template.model.ts
export interface ExerciseSummary {
  exerciseId: number;
  name: string;
}

export interface Template {
  templateId: number;
  dayOfWeek: string;
  userId: number;
  exercises: ExerciseSummary[];
}

/** Body for POST /api/templates and PUT /api/templates/{id} */
export interface TemplateRequest {
  dayOfWeek: string;
  userId: number;
  exerciseIds: number[];
}

// user.model.ts
export interface User {
  userId: number;
  name: string;
  goal?: string;
}
```

## Working together without collisions

- Branches: `lastname-homeworkN`, opened as a PR to `main`.
- Only generate and edit components in your own folders.
- Shared files everyone touches: `app.routes.ts` (each adds their own routes), `app.html` (Huang adds the navbar/footer), and this plan. Keep edits to those small and pull `main` before opening a PR.
- If you need to change a shared widget's inputs/outputs, post in Discord first.
