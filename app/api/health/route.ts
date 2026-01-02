/* 
  HEAVSTAL TECH OPEN SOURCE - API ROUTE EXAMPLE
  ------------------------------------------------
  This file demonstrates how to create backend API routes in Next.js App Router.
  
  Use Case:
  - Validating server status (Health Check)
  - Connecting to databases securely
  - Handling form submissions without a separate backend
  
  Access this route at: http://localhost:3000/api/health

  You can create more apis in the "app/api/[api-name]/route.ts" folder or file 
*/

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { 
      status: 'ok', 
      message: 'Heavstal Simple WebApp is running smoothly.',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}
