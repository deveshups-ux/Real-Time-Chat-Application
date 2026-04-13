# ChatApp 💬

A real-time chat application built with the MERN stack. Users can create accounts, find other users, and have live conversations — messages appear instantly without any page refresh.

Built this as a hands-on project to learn Socket.io and how real-time communication works under the hood.

---

## Tech Stack

**Frontend** — React, Tailwind CSS, DaisyUI, Redux Toolkit, Axios, React Router v6

**Backend** — Node.js, Express.js, MongoDB, Mongoose, Socket.io, JWT, Bcrypt.js

---

## Features

- Signup / Login with JWT-based authentication
- Passwords hashed with bcrypt before storing
- Auto-generated avatars for user profiles
- Search and find other registered users
- Real-time messaging powered by Socket.io
- Redux store persisted across page refreshes
- Clean glassmorphism UI built with Tailwind + DaisyUI

---

## Folder Structure

```
├── backend
│   ├── config          # MongoDB connection
│   ├── models          # Mongoose schemas (User, Message)
│   ├── controllers     # Route logic
│   ├── routes          # API endpoints
│   ├── middleware      # JWT auth middleware
│   └── index.js
│
└── frontend
    ├── src
    │   ├── components
    │   ├── pages
    │   ├── hooks       # useGetOtherUsers, useGetMessages
    │   ├── redux       # store + slices
    │   └── App.jsx
```

---

## Getting Started

```bash
git clone https://github.com/deveshups-ux/Real-Time-Chat-Application.git
cd Real-Time-Chat-Application
```

**Backend setup**

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder and add your MongoDB URI, JWT secret, and port. Refer to `.env.example` if available.

```bash
npm run dev
```

**Frontend setup**

```bash
cd frontend
npm install
npm run dev
```

App runs on `http://localhost:5173` by default.

---

## API Overview

```
POST   /api/auth/signup
POST   /api/auth/login
POST   /api/auth/logout

GET    /api/users              → get all users except self  (protected)

POST   /api/message/send/:id   → send a message
GET    /api/message/:id        → fetch conversation
```

All protected routes require a valid JWT token sent via cookies.

---

## Screenshots

_Coming soon_

---

## Acknowledgements

- [DaisyUI](https://daisyui.com) for the component library
- [Avatar Placeholder API](https://avatar.iran.liara.run) for profile images

---

Made by **Devesh Tiwari** &nbsp;·&nbsp; March – April 2026

[![GitHub](https://img.shields.io/badge/GitHub-deveshups--ux-181717?style=flat&logo=github)](https://github.com/deveshups-ux)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Devesh%20Tiwari-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/devesh-tiwari-642b03374)
