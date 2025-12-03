## OCEAN GET Authenticated Dashboard

A secure authentication system built with Next.js App Router, featuring a glassmorphism design and HttpOnly cookies for enhanced security.

### Features

- Glassmorphism Design: Modern UI with glassmorphism - effects and animated gradients
- Responsive Design: Mobile-friendly layout that works on all devices
- User Dashboard: Display user information fetched from a mock API
- Logout Functionality: Secure logout that clears authentication cookies

## Technologies Used

- Next.js 16.0.6: React framework with App Router
- React 19.2.0: UI library
- TypeScript: Type-safe JavaScript
- Tailwind CSS 4: Utility-first CSS framework
- Lucide React: Icon library for the UI


### Live Url:
Open [https://ocean-get-auth.vercel.app/](https://ocean-get-auth.vercel.app) with your browser to see the dashboard.

## Setup Instructions

#### Clone the repository

Cone with SSH:

```bash
git clone git@github.com:roushan-sheik/ocean_get_auth.git
cd ocean_get_auth
```

Clone With HTTPS:

```bash
git clone https://github.com/roushan-sheik/ocean_get_auth.git
cd ocean_get_auth
```

#### Install all the dependencies

```bash
npm install
```

#### Run the project

```bash
npm run dev
```

#### Application is running on this port

```bash
http://localhost:3000
```

## File and Folder Structure

```text
.
├── app
│   ├── api
│   │   ├── login
│   │   │   └── route.ts
│   │   ├── logout
│   │   │   └── route.ts
│   │   └── user
│   │       └── route.ts
│   ├── dashboard
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── login
│   │   └── page.tsx
│   └── page.tsx
├── eslint.config.mjs
├── lib
│   └── api-config.ts
├── middleware.ts
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── tsconfig.json
└── types
    └── index.ts

```
