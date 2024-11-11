# User Registration Application

This project is a user registration web application built with a **React** frontend and a **Node.js / Express** backend. It allows users to view, add, update, and delete registered users. The registered user data is stored in a JSON file for backend persistence.

### Project Structure

The project is organized into a backend and a frontend folder:

```
user-registration-app/
├── server/
│   ├── data/
│   │   └── users.json
│   ├── server.js
│   └── package.json
└── client/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── UserForm.jsx
    │   │   └── UserTable.jsx
    │   ├── App.css
    │   ├── App.jsx
    │   └── index.jxs
    └── package.json
```

## Frontend Overview

The **frontend** is built using **React** and **CSS** to create a modern interface that allows users to interact seamlessly with the user data. Each component is designed to handle specific parts of the user registration functionality.

### Frontend Components

The main components of the frontend are as follows:

#### 1. `App.js`

- The main file that integrates all components.
- Manages user state, CRUD functionality, and API calls to the backend.
- Fetches user data on load and displays it in a table.

#### 2. `components/UserForm.js`

- A form component that allows users to **add new users** and **update existing user data**.
- Contains input fields for **Name**, **Email**, and **Date of Birth**.
- Submits data to the parent `App.js` component to handle addition or update actions.

#### 3. `components/UserTable.js`

- Displays a table of registered users.
- Shows an **Edit** icon to update a user and a **Delete** icon to remove a user.
- Triggers update and delete actions by calling functions passed down from `App.js`.


#### 4. `App.css`

- Contains the styling for the application.
## Backend Overview

Node.js and Express.js is used. Server provides CRUD functionality for user data stored in a JSON file. The server reads, updates, and saves data to this file.

- **server.js**: Configures the Express server and sets up middleware.
- **data/users.json**: Stores registered users in JSON format for persistence.

## Installation

### Prerequisites

Ensure that you have **Node.js** and **npm** installed on your machine.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/VivekAsole/user-registration.git
   ```

2. Install backend dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

## Usage

1. **Start the Backend Server**:
   ```bash
   cd server
   npm run start
   ```

2. **Start the Frontend**:
   Open a new terminal window:
   ```bash
   cd client
   npm run dev
   ```

## API Endpoints

The backend server provides the following endpoints:

- **GET /api/users**: Fetches all registered users.
- **POST /api/users**: Adds a new user.
- **PUT /api/users/:id**: Updates an existing user by ID.
- **DELETE /api/users/:id**: Deletes a user by ID.