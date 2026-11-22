
# NOEMA — Notes App

**A home for your thoughts.**

NOEMA is a responsive notes application built with React as part of the SYNTECXHUB Web Development Internship (Week 1).

The app helps users capture ideas, organize notes, and manage their content through a simple, user-friendly interface.

## Features

- Add notes with a title and content.
- Edit existing notes.
- Cancel editing without saving changes.
- Delete notes with a confirmation message.
- Save notes automatically using browser localStorage.
- Keep notes after refreshing the page.
- Automatically focus the title input when the app opens.
- Responsive layout for desktop and mobile devices.

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Vite

## React Concepts Used

- useState — manages notes, form inputs, and editing state.
- useEffect — saves notes to localStorage and focuses the title input.
- useRef — provides access to the title input element.
- Array methods — map() and filter() for updating and deleting notes.

## How to Run the Project

1. Download or clone this repository.
2. Open the project folder in a code editor.
3. Install the dependencies:

   npm install

4. Start the development server:

   npm run dev

5. Open the local URL shown in the terminal.

## Project Information

- **Project:** NOEMA Notes App
- **Internship:** SYNTECXHUB Web Development Internship
- **Assignment:** Week 1 — Notes App
- **Developer:** Lama Haidar

## Note

Notes are stored locally in the user's browser using localStorage. No external database or account is required.
