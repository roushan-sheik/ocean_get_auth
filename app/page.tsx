import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to Auth Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A secure authentication system built with Next.js
        </p>
        <div className="space-x-4">
          <Link
            href="/login"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="/dashboard"
            className="inline-block bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
