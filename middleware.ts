import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoutes = createRouteMatcher([
  "/sign-up",
  '/sign-in',
  "/login",
  "/",
  "/home"
])

const isPublicApiRoute = createRouteMatcher([
  "/api/videos"
])
export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const currentUrl = new URL(req.url);
  const isHomePage = currentUrl.pathname === "/home"
  const isApiRequest = currentUrl.pathname.startsWith("/api")
  if(userId && isPublicRoutes(req) && !isHomePage){
    return NextResponse.redirect(new URL("/home", req.url))
  } // not logged in then 

  if(!userId){
    if (!isPublicRoutes(req) && !isPublicApiRoute(req)){
      return NextResponse.redirect(new URL("/sign-in", req.url))
    }

    if(isApiRequest && !isPublicApiRoute(req)){
      return NextResponse.redirect(new URL("/sign-in", req.url))
    }
  }

 return NextResponse.next()
});

export const config = {
  matcher:["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
