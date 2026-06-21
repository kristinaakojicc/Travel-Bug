import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // MOCK LOGIC: Replace this with an actual database lookup
  // Example: const user = await db.users.findUnique({ where: { email } });
  const mockUser = { email: 'user@travelbug.com', password: 'password123' };

  if (email === mockUser.email && password === mockUser.password) {
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Authentication successful',
      user: { email: email } 
    }, { status: 200 });
  } else {
    // Return failure response
    return NextResponse.json({ 
      success: false, 
      message: 'Invalid email or password' 
    }, { status: 401 });
  }
}