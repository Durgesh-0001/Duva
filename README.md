# DuVa Frontend

A modern chat application frontend built with [React](https://react.dev/), [Vite](https://vitejs.dev/), [Zustand](https://zustand-demo.pmnd.rs/), [Socket.io](https://socket.io/), [Tailwind CSS](https://tailwindcss.com/), and [DaisyUI](https://daisyui.com/).

## Features

- User authentication (Sign up, Login, Logout)
- Real-time messaging with Socket.io
- Profile management (update avatar)
- Theme selection (30+ DaisyUI themes)
- Responsive UI with Tailwind CSS & DaisyUI
- Sidebar with online/offline contacts
- Image attachments in chat
- Skeleton loaders for smooth UX

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
git clone https://github.com/your-username/duva.git
cd duva/Frontend
npm install
```

### Running Locally

```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Project Structure

```
Frontend/
  ├── public/           # Static assets
  ├── src/
  │   ├── components/   # Reusable UI components
  │   ├── constants/    # Theme constants
  │   ├── lib/          # Utility libraries (axios, helpers)
  │   ├── pages/        # Route pages (Home, Login, Signup, etc.)
  │   ├── store/        # Zustand stores (auth, chat, theme)
  │   ├── assets/       # Images and icons
  │   ├── index.css     # Tailwind base styles
  │   └── App.jsx       # Main app component
  ├── package.json
  ├── tailwind.config.js
  ├── vite.config.js
  └── README.md
```

## Environment Variables

- The frontend expects the backend API at `http://localhost:8000/api` in development.
- Update `src/lib/axios.js` if your backend runs elsewhere.

## Dependencies

- React, React Router, Zustand, Socket.io-client, Axios, Lucide-react, DaisyUI, Tailwind CSS, React Hot Toast

## License

MIT

---

> **Note:** This is only the frontend. For full functionality, clone and run