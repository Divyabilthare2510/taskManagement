# Task Management Application

A full-stack Task Management Web Application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) with a focus on a modern, responsive frontend using Material UI.

## Features

### Frontend
- React.js with Vite for fast development
- Material UI (MUI) for modern, responsive design
- Light/Dark theme switcher
- User authentication (Sign Up, Sign In)
- Dashboard with task list and pagination
- Add/Edit Task form
- Role-based access control (Admin can delete tasks)
-  Responsive design for all screen sizes

### Backend
-  Node.js/Express RESTful API
-  MongoDB database with Mongoose
-  JWT authentication
-  User roles (Admin and Normal User)
-  Task CRUD operations
-  Pagination support

## Project Structure

```
TastManagementApplication/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/
│   │   │   ├── SignUp.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── TaskForm.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── api/
│   │   │   └── axios.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── theme.js
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanagement
JWT_SECRET=your_jwt_secret_key_here_change_in_production
```

4. Start the backend server:
```bash
npm run dev
```

The backend server will run on `https://taskmanagement-mdjy.onrender.com`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory (optional, defaults to localhost:5000):
```env
VITE_API_URL= https://taskmanagement-mdjy.onrender.com
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `https://task-management-iota-ten.vercel.app/signin`

## Usage

### Creating an Account

1. Navigate to the Sign Up page
2. Fill in your name, email, password, and select a role (User or Admin)
3. Click "Sign Up"

### Signing In

1. Navigate to the Sign In page
2. Enter your email and password
3. Click "Sign In"

### Managing Tasks

- **View Tasks**: All tasks are displayed on the Dashboard with pagination
- **Create Task**: Click "New Task" button or navigate to `/task/new`
- **Edit Task**: Click the edit icon on any task
- **Delete Task**: Only Admin users can see and use the delete button

### Theme Switching

Click the theme toggle icon in the top navigation bar to switch between light and dark modes.

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create a new user account
- `POST /api/auth/signin` - Sign in to an existing account

### Tasks
- `GET /api/tasks` - Get all tasks (with pagination: `?page=1&limit=10`)
- `GET /api/tasks/:id` - Get a single task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task (Admin only)

## User Roles

- **User**: Can create, view, and edit their own tasks
- **Admin**: Can create, view, edit, and delete all tasks

## Task Model

Each task contains:
- **Title** (required)
- **Description** (optional)
- **Status** (Pending or Completed)
- **Created Date** (automatically set)

## Deployment

### Backend Deployment

1. Set up environment variables on your hosting platform
2. Ensure MongoDB is accessible (use MongoDB Atlas for cloud deployment)
3. Deploy to platforms like Heroku, Railway, or Render

### Frontend Deployment

1. Build the production version:
```bash
cd frontend
npm run build
```

2. Deploy the `dist` folder to:
   - **Vercel**: Connect your GitHub repo and deploy
   - **Netlify**: Drag and drop the `dist` folder or connect via Git
   - **Other platforms**: Upload the `dist` folder contents

3. Update the `VITE_API_URL` environment variable to point to your deployed backend

## Technologies Used

- **Frontend**: React, Vite, Material UI, React Router, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs
- **Development**: nodemon, Vite


