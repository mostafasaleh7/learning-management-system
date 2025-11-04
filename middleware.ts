import { NextResponse } from "next/server";

export function middleware() {
  // تعطيل الـ Clerk مؤقتًا
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
