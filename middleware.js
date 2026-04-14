import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();

  // 1. Handle the spam parameter '?st='
  if (url.searchParams.has("st")) {
    // Rewrite to a non-existent path to trigger a 404
    url.pathname = '/404';
    url.search = ""; // Clear the spam string
    return NextResponse.rewrite(url);
  }

  // 2. Fix Trailing Slashes (Keep as redirect for SEO)
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  // 3. Force HTTPS in production
  if (url.protocol === "http:" && process.env.NODE_ENV === "production") {
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images).*)",
  ],
};