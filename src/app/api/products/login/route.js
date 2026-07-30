import { signToken } from "@/app/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  if (email !== "a@a.com" || password !== "123456") {
    console.log(email, password, "what");
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = await signToken({ email, role: "user" });
  const res = NextResponse.json({ message: "Login successful" });
  res.cookies.set("token", token, {
    httpOnly: true,
    maxAge: 60 * 60,
    path: "/",
  });
  return res;
}
