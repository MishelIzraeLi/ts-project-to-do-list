# My To-Do List

## Project Overview

A task management application built with React, TypeScript, and Vite.

The application allows users to organize their daily tasks, track their progress, and receive random inspirational quotes from an external API.

This project was developed as part of a TypeScript course assignment.

## Features

- Add new tasks with a title and an optional description.
- Mark tasks as completed or pending.
- Delete tasks.
- Filter tasks by completion status.
- Save and restore tasks using LocalStorage.
- Display random quotes from an external API.
- Handle API loading states and errors.
- Responsive and user-friendly design.

## Technologies Used

- React
- TypeScript
- Vite
- CSS
- Fetch API
- LocalStorage
- Oxlint


## Installation and Setup

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run the code quality checks:

```bash
npm run lint
```

## External API

The application uses the api.quotable Quotes API to retrieve random quotes.

Endpoint:

https://api.quotable.io/random

The application handles loading states and displays an error message if the API request fails.

## Data Persistence

Tasks are stored in the browser's LocalStorage using JSON serialization. React's useEffect hook is used to load and save the tasks automatically.

This allows users to retain their tasks and completion status after refreshing the page.

## TypeScript Implementation

The project uses TypeScript interfaces and types to define task objects, API responses, component properties, function parameters, and application states.

## Author

Michelle Izraeli

Software Engineering Student – Ariel University

2026