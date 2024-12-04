import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  if (username === 'user' && password === 'password123') {
    return NextResponse.json({ success: true, message: 'Login successful', token: 'mock-token' });
  } else {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }
}

export async function DELETE() {
  
  return NextResponse.json({ success: true, message: 'Logout successful' });
}
