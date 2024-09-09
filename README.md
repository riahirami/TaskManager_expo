# Task Manager Mobile App

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Tech Stack](#tech-stack)
- [Backend modification](#backend-modification)

## Overview

This repository contains the source code for a **Task Manager Mobile App** built using React Native with a **Kanban** and **list view** for tasks. It allows users to create, edit projects, and create tasks delete, and update tasks. The authenticated use can change the status of the task to make it complete or incomplete.

## Features

- **User Authentication:** Register, login, and authentication using JWT.
- **Project Management:** Create, edit, project.
- **Task Management:** Create, edit, delete tasks.
- **Drag & Drop Kanban:** Drag tasks between "Incomplete" and "Completed" columns in the Kanban view.
- **API Integration:** Fully functional backend API for managing tasks and projects.

## Installation

### Prerequisites

- Node.js
- Yarn or NPM
- React Native CLI or Expo CLI (depending on how you're running the app)

### Clone the repository

```bash
git clone https://github.com/riahirami/TaskManager_expo.git

```

### Install dependencies

```bash
npm install
```

Or

```bash
yarn install
```

### Running the App

```bash
npm start
```

Please ensure that the provided API on the server has been run.

### Tech Stack

- React Native: Cross-platform mobile framework.
- Redux Toolkit Query (RTK Query): For managing API state.
- Formik & Yup: Form management and validation.
- React Navigation: Navigation across screens.
- SQLite / Node.js: Backend database and API.
- JWT: Secure user authentication.
- DraggableFlatList: Drag-and-drop task management.

### Backend modification

- Endpoint added to mark tasks as complete/incomplete

- **Update Task status:**
  - **Method:** `PUT`
  - **URL:** `'/tasks/:id/status'`
  - **Body:**
    ```json
    {
      "status": "complete | incomplete"
    }
    ```
