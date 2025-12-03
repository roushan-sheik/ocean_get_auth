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
..
├── app/                          # Next.js App Router directory containing all pages and API routes
│   ├── api/                      # API routes directory
│   │   ├── login/                # Login API endpoint
│   │   │   └── route.ts          # Handles user authentication and cookie setting
│   │   ├── logout/               # Logout API endpoint
│   │   │   └── route.ts          # Clears authentication cookie
│   │   └── user/                 # User data API endpoint
│   │       └── route.ts          # Fetches user data with authentication token
│   ├── dashboard/                 # Dashboard page directory
│   │   └── page.tsx              # Dashboard component displaying user information
│   ├── favicon.ico
│   ├── globals.css               # Global styles including glassmorphism effects
│   ├── layout.tsx                # Root layout component for the entire application
│   ├── login/                    # Login page directory
│   │   └── page.tsx              # Login form component with glassmorphism design
│   └── page.tsx                 # Home page component
├── eslint.config.mjs
├── lib/                         # Library directory for utilities
│   └── api-config.ts
├── middleware.ts                 # Next.js middleware for route protection
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public/                      # Static assets directory
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md                    # Project documentation
├── tsconfig.json
└── types/                       # TypeScript type definitions directory
    └── index.ts
```
