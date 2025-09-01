
# React Todo App with Context API

A simple **Todo application** built with React that demonstrates state management using **Context API**.  
Features include adding, editing, deleting, and marking todos as complete, with persistence via **localStorage**.

## Features

- Add new todos
- Edit existing todos
- Delete todos
- Mark todos as complete/incomplete
- Persistent state using `localStorage`
- Global state management with **Context API**
- Responsive and styled with Tailwind CSS

## Technologies Used

- **React** (functional components, hooks)
- **Context API** for global state
- **Tailwind CSS** for styling
- **localStorage** for data persistence

## Project Structure

```bash

/src
├── /components
│    ├── TodoForm.jsx
│    └── TodoItem.jsx
├── /context
│    └── context.js
├── App.jsx
└── index.js

```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
````

2. Navigate to the project folder:

```bash
cd react-todo-context
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

The app should now be available at [http://localhost:5173](http://localhost:5173).

## Usage

1. Type a todo in the input box and click **Add**.
2. Click the **✏️ Edit** button to modify a todo.
3. Click the **📁 Save** button to save changes.
4. Use the checkbox to mark a todo as complete.
5. Click the **❌ Delete** button to remove a todo.

## Notes

* Todos are saved in `localStorage`, so refreshing the page will retain your list.
* The app uses **Context API** to avoid prop drilling and manage global state.

## Author

**Yashash P**

