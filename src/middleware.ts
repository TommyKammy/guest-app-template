import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const protectedPath = req.nextUrl.pathname.startsWith("/dashboard");
  if (protectedPath && !req.auth) {
    const signInUrl = new URL("/api/auth/signin", req.nextUrl.origin);
    return NextResponse.redirect(signInUrl);
  }
  return undefined;
});

export const config = {
  matcher: ["/dashboard/:path*"]
};
