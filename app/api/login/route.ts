import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }
    // reqres_5f88a1fddd0c4aaa8a4f6ae6dce2aa3d
    // Call the external API from server-side (avoids CORS issues)
    const loginResponse = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres_5f88a1fddd0c4aaa8a4f6ae6dce2aa3d",
      },
      body: JSON.stringify({ email, password }),
    });

    const loginData = await loginResponse.json();

    if (!loginResponse.ok) {
      return NextResponse.json(
        { error: loginData.error || "Invalid credentials" },
        { status: loginResponse.status }
      );
    }

    // Set HttpOnly cookie with the token
    const cookieStore = await cookies();
    cookieStore.set("auth_token", loginData.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return NextResponse.json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "An error occurred during login" },
      { status: 500 }
    );
  }
}
