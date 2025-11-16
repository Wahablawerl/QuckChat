# QuickChart - Client

QuickChart is a lightweight real-time chat application built with a modern React frontend and an Express + MongoDB backend. It demonstrates full-stack skills including JWT authentication, file upload (Cloudinary), WebSockets (socket.io) for real-time events, and clean separation of client/server responsibilities.

🔗 **Live Demo**: [https://quck-chat-git-main-wahabls-projects.vercel.app/](https://quck-chat-git-main-wahabls-projects.vercel.app/)

---

## Features

- **Real-time Messaging** — Instant message delivery using socket.io with online/offline user status.
- **JWT Authentication** — Secure login/signup with token persistence and auto-check on app load.
- **User Profiles** — Upload and manage profile pictures, bios, and user information.
- **File Sharing** — Send images in messages with Cloudinary integration.
- **Search & Filter** — Find and chat with any registered user via the sidebar search.
- **Message History** — View all previous conversations and unseen message counts.
- **Responsive Design** — Mobile-friendly UI built with Tailwind CSS.

---

## Tech stack

- **Frontend**: React, Vite, React Router, Tailwind CSS, react-hot-toast
- **Backend**: Node.js, Express, Mongoose (MongoDB), socket.io
- **Build Tool**: Vite (fast HMR and bundling)
- **Routing**: React Router v6
- **Auth**: JWT
- **Media**: Cloudinary (uploader integration)
- **State Management**: React Context API (AuthContext, ChatContext)
- **HTTP Client**: Axios
- **Real-time**: Socket.io client
- **Notifications**: react-hot-toast
- **Deployment**: Vercel

---

## Usage

1. **Sign Up** — Create a new account with full name, email, and password.
2. **Log In** — Use your credentials to access the chat.
3. **Browse Users** — View all registered users in the left sidebar.
4. **Send Messages** — Click a user and type a message. Press Enter or click Send.
5. **Upload Images** — Attach images to messages using the gallery icon.
6. **Edit Profile** — Click the menu icon in the sidebar and select "Edit Profile" to update your avatar and bio.
7. **See Status** — Online users show a green badge; offline users show a gray badge.
