# Task Manager Mobile App

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Backend Setup](#backend-setup)
- [Tech Stack](#tech-stack)
- [Drag & Drop Kanban](#drag--drop-kanban)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Overview

This repository contains the source code for a **Task Manager Mobile App** built using React Native with a **Kanban** and **list view** for tasks. It allows users to create, edit, delete, and update tasks using drag-and-drop functionality in the Kanban view. Additionally, the app features push notifications, task prioritization, and user authentication using JWT tokens.

## Features

- **User Authentication:** Register, login, and authentication using JWT.
- **Task Management:** Create, edit, delete tasks.
- **Drag & Drop Kanban:** Drag tasks between "Incomplete" and "Completed" columns in the Kanban view.
- **Task Prioritization:** Assign and manage task priorities.
- **Push Notifications:** Real-time notifications for task updates.
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

ensure that the provided API on the server

### Tech Stack

React Native: Cross-platform mobile framework.
Redux Toolkit Query (RTK Query): For managing API state.
Formik & Yup: Form management and validation.
React Navigation: Navigation across screens.
SQLite / Node.js: Backend database and API.
JWT: Secure user authentication.
DraggableFlatList: Drag-and-drop task management.
