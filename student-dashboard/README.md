# Student Management Dashboard

React practical assessment project built with Vite, matching the style used in the
"Mobile Communication and Computing" course repo (DAY 03: Vite + React, functional
components with hooks, and class components).

## How to run

1. Install Node.js (v18+ recommended).
2. Open a terminal in this folder.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the dev server:
   ```
   npm run dev
   ```
5. Open the URL shown in the terminal (usually http://localhost:5173).

## Project structure

```
src/
  App.jsx                  - Root functional component, holds students in useState
  App.css                  - Colorful styling for layout, cards, badges, buttons
  index.css                - Global page background
  main.jsx                 - React entry point
  components/
    StudentForm.jsx         - Functional component (useState for form fields)
    StudentList.jsx         - Class component (receives students via props)
    StudentCard.jsx         - Functional component (receives one student via props)
```

## How it meets the assessment requirements

- **Functional Components**: `StudentForm`, `StudentCard`, and `App` itself.
- **Class Component**: `StudentList` extends `React.Component`.
- **Props**: `App` -> `StudentForm` (via `onAddStudent`), `App` -> `StudentList`
  (via `students`), `StudentList` -> `StudentCard` (via `id`, `name`, `course`,
  `status`).
- **useState**: used in `App` for the student list, and in `StudentForm` for the
  four form fields (id, name, course, status).
- **Initial data**: 3 students pre-loaded (IT001, IT002, IT003).
- **Add functionality**: new student appears immediately in the list and the form
  clears after submission.
- **Colorful UI**: gradient header/background, green/red status badges, rounded
  cards with shadows, hover effects on cards and the Add button.
