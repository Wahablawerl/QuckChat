# QuickChart

QuickChart is a lightweight real-time chat application built with a modern React frontend and an Express + MongoDB backend. It demonstrates full-stack skills including JWT authentication, file upload (Cloudinary), WebSockets (socket.io) for real-time events, and clean separation of client/server responsibilities.

This README is written to help reviewers and recruiters quickly understand the project, run it locally, and evaluate the technical decisions.

---

## Highlights (what to look for)

- Real-time messaging using socket.io with presence (online/offline) indicators.
- JWT authentication with protected REST routes and token persistence in the browser.
- File upload handling (profile images and message images) integrated with Cloudinary.
- Clear project structure: separate `client/` (React + Vite) and `server/` (Express) folders.
- Focus on developer experience: dev scripts, environment-driven configuration, and small, testable controllers.

---

## Tech stack

- Frontend: React, Vite, React Router, Tailwind CSS, react-hot-toast
- Backend: Node.js, Express, Mongoose (MongoDB), socket.io
- Auth: JWT
- Media: Cloudinary (uploader integration)
- Tooling: ESLint, npm scripts

---
