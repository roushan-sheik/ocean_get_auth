import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    // Get the auth token from the HttpOnly cookie
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    // Fetch user data from the mock API
    const userResponse = await fetch("https://reqres.in/api/users/2", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres_5f88a1fddd0c4aaa8a4f6ae6dce2aa3d",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!userResponse.ok) {
      throw new Error("Failed to fetch user data from external API");
    }

    const userData = await userResponse.json();

    // Return the user data as JSON
    return NextResponse.json(userData);
  } catch (error) {
    console.error("User data fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch user data" },
      { status: 500 }
    );
  }
}
