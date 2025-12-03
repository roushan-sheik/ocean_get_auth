import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    // Clear the auth cookie
    const cookieStore = await cookies();
    cookieStore.delete("auth_token");

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to clear cookie" },
      { status: 500 }
    );
  }
}
