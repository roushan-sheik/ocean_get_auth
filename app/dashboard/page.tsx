"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getHeaders } from "@/lib/api-config";

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

  const fetchUserData = async () => {
    try {
      // Fetch user data from mock API
      const response = await fetch("https://reqres.in/api/users/2", {
        headers: getHeaders(),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
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
      // The correct endpoint is /api/logout, not /api/auth/logout
      const response = await fetch("/api/logout", {
        method: "POST",
      });

      if (response.ok) {
        router.push("/login");
      } else {
        throw new Error("Logout failed");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Logout failed");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-12 text-center">
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className="w-32 h-32 rounded-full border-4 border-white mx-auto shadow-lg"
            />
            <h2 className="mt-4 text-3xl font-bold text-white">
              {user.first_name} {user.last_name}
            </h2>
            <p className="mt-2 text-indigo-100">{user.email}</p>
          </div>

          {/* User Information */}
          <div className="px-8 py-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Profile Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-2">
                  User ID
                </p>
                <p className="text-lg font-semibold text-gray-800">{user.id}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-2">
                  Full Name
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  {user.first_name} {user.last_name}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg md:col-span-2">
                <p className="text-sm font-medium text-gray-500 mb-2">
                  Email Address
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  {user.email}
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-blue-900">
                    Welcome to your dashboard!
                  </h4>
                  <p className="mt-1 text-sm text-blue-700">
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
