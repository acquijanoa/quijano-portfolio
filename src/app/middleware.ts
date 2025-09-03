import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/admin/:path*'],
};

export function middleware(req: NextRequest) {
  const prompt = 'Basic realm="Admin Area"';
  const auth = req.headers.get('authorization');

  if (!auth) {
    return new Response('Authentication required', {
      status: 401,
      headers: { 'WWW-Authenticate': prompt },
    });
  }

  const [scheme, encoded] = auth.split(' ');
  if (scheme !== 'Basic' || !encoded) {
    return new Response('Invalid auth header', { status: 400 });
  }

  const decoded = Buffer.from(encoded, 'base64').toString();
  const [user, pass] = decoded.split(':');

  if (user !== process.env.ADMIN_USER || pass !== process.env.ADMIN_PASS) {
    return new Response('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': prompt },
    });
  }

  return NextResponse.next();
}
