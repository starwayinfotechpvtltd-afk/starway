import { NextResponse } from "next/server";

export function proxy(request) {
  const url = request.nextUrl.clone();


  const allowedParams = ["page", "category"];
  let hasChanges = false;

  url.searchParams.forEach((value, key) => {
    if (!allowedParams.includes(key)) {
      url.searchParams.delete(key);
      hasChanges = true;
    }
  });

  if (hasChanges) {
    return NextResponse.redirect(url, 301);
  }


  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }


  if (url.protocol === "http:") {
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next|favicon.ico|robots.txt|sitemap.xml|images).*)",
  ],
};