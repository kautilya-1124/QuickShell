# QuickShell

QuickShell is a full-stack marketplace application with a React client and an Express/Node server. It includes product browsing, authentication, chat, and profile features.

## Project structure

- client: Vite + React frontend
- server: Node.js + Express backend

## Tech stack

- Frontend: React, Vite, React Router
- Backend: Node.js, Express, MongoDB, Socket.IO
- Media: Cloudinary

## Getting started

### 1. Install dependencies

```bash
cd client
npm install

cd ../server
npm install
```

### 2. Configure environment variables

Create a `.env` file in the server folder and add your configuration.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. Run the app

```bash
cd client
npm run dev
```

```bash
cd server
npm run dev
```

## Notes

- The client runs on Vite dev server.
- The server runs as a Node.js Express app.
- Socket-based chat is available through the backend.
