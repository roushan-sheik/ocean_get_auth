"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (error && error.includes("Authentication")) {
      router.push("/login");
    }
  }, [error, router]);

  const fetchUserData = async () => {
    try {
      const response = await fetch("/api/user");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch user data");
      }

      setUser(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
      });
      if (response.ok) {
        setTimeout(() => (window.location.href = "/"), 300);
      } else {
        throw new Error("Logout failed");
      }
    } catch (err) {
      console.error("Logout error:", err);
      setError(err instanceof Error ? err.message : "Logout failed");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="glass rounded-2xl p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
          <p className="mt-4 text-white">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="glass rounded-2xl p-8 text-center max-w-md">
          <div className="bg-red-500/20 backdrop-blur border border-red-400/30 text-white px-6 py-4 rounded-lg">
            {error}
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">
            <Link href={"/"}>Dashboard</Link>
          </h1>
          <button
            onClick={handleLogout}
            className="glass cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 transform hover:scale-105"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass rounded-2xl overflow-hidden shadow-2xl">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-purple-600/50 to-pink-500/50 backdrop-blur p-8 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
                fill
                className="rounded-full border-4 border-white/50 shadow-lg object-cover"
                sizes="128px"
              />
            </div>
            <h2 className="mt-4 text-3xl font-bold text-white">
              {user.first_name} {user.last_name}
            </h2>
            <p className="mt-2 text-white/80">{user.email}</p>
          </div>

          {/* User Information */}
          <div className="p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Profile Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-lg">
                <p className="text-sm font-medium text-white/70 mb-2">
                  User ID
                </p>
                <p className="text-lg font-semibold text-white">{user.id}</p>
              </div>

              <div className="glass p-6 rounded-lg">
                <p className="text-sm font-medium text-white/70 mb-2">
                  Full Name
                </p>
                <p className="text-lg font-semibold text-white">
                  {user.first_name} {user.last_name}
                </p>
              </div>

              <div className="glass p-6 rounded-lg md:col-span-2">
                <p className="text-sm font-medium text-white/70 mb-2">
                  Email Address
                </p>
                <p className="text-lg font-semibold text-white">{user.email}</p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 glass rounded-lg border border-white/20">
              <div className="flex items-start">
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-white">
                    Welcome to your dashboard!
                  </h4>
                  <p className="mt-1 text-sm text-white/80">
                    This is a secure area protected by authentication
                    middleware. Your session is maintained using HttpOnly
                    cookies for enhanced security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
