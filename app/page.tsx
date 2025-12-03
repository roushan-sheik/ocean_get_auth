import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="glass max-w-xl w-full rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">OCEAN GET</h1>
        <p className="text-xl text-white/90 mb-8">
          Welcome to ocean get dashboard
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            href="/login"
            className="block glass-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            href="/dashboard"
            className="block glass text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
