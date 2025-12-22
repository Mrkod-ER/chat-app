# Chat App

[![License](https://img.shields.io/github/license/Mrkod-ER/chat-app)](LICENSE)
[![Vercel Deploy](https://vercel.com/button)](https://chat-app-brown-one.vercel.app/)

A real-time chat application built with Next.js, Convex, Clerk, and WebSockets—offering fast, secure, and modern messaging.

## Live Demo

👉 [Try it on Vercel!](https://chat-app-brown-one.vercel.app/)

## Features

- **Real-Time Messaging:** Chat instantly powered by WebSockets.
- **Authentication:** Seamless sign-up/sign-in with [Clerk](https://clerk.com/).
- **Database:** [Convex](https://convex.dev/) drives flexible and scalable data handling.
- **Next.js:** Fast, fullstack React framework.
- **Secure Sessions:** Authentication and authorization everywhere.
- **Responsive UI:** Fully mobile and desktop compatible.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Convex](https://convex.dev/)
- [Clerk](https://clerk.com/)
- WebSockets

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Mrkod-ER/chat-app.git
cd chat-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` in the root directory:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Convex
CONVEX_DEPLOY_KEY=your_convex_deploy_key
CONVEX_URL=your_convex_url
```

Get keys from [Clerk](https://dashboard.clerk.com/) and [Convex](https://dashboard.convex.dev/).

### 4. Start Convex Locally (Optional)

Install CLI and start:

```bash
npm install -g convex
convex dev
```

Or connect to remote Convex.

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Project Structure

```
chat-app/
├── convex/         # Convex backend functions
├── app/            # Next.js routes/app directory
├── components/     # React UI components
├── public/         # Static assets
├── styles/         # CSS files
├── utils/          # Utility functions
├── .env.local      # Environment variables
├── README.md
└── package.json
```

## Usage

- Sign up or log in with Clerk.
- Join or create a chat room.
- Send and receive live messages (WebSocket-powered).
- Data stored via Convex.

## Deployment

Ready to deploy on [Vercel](https://vercel.com/), Netlify, or custom servers.

- Push repo to GitHub.
- Configure environment variables in your deployment platform.
- For Vercel: Connect the repo, set environment variables, and deploy.

## References

- [Next.js Docs](https://nextjs.org/docs)
- [Convex Docs](https://docs.convex.dev)
- [Clerk Docs](https://docs.clerk.com)
- [WebSockets Guide](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

## License

This project is [MIT Licensed](LICENSE).

---

Made with ❤️ using Next.js, Convex, Clerk, and WebSockets.
