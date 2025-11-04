// مؤقتاً وقفنا استخدام Clerk middleware لحد ما نجهزه تماماً
export function middleware(req) {
  return Response.next();
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
