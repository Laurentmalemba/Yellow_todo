// /src/api/auth.ts

export type AuthResponse = {
    success: boolean;
    message: string;
    token?: string;
  };
  
  const mockUsers = [
    { email: "test@example.com", password: "password123" },
  ];
  
  export const login = async (email: string, password: string): Promise<AuthResponse> => {
    const user = mockUsers.find((user) => user.email === email && user.password === password);
  
    if (!user) {
      return { success: false, message: "Invalid email or password." };
    }
  
    return {
      success: true,
      message: "Login successful.",
      token: "mock-jwt-token",
    };
  };
  
  export const register = async (email: string, password: string): Promise<AuthResponse> => {
    if (mockUsers.find((user) => user.email === email)) {
      return { success: false, message: "User already exists." };
    }
  
    mockUsers.push({ email, password });
    return {
      success: true,
      message: "Registration successful.",
      token: "mock-jwt-token",
    };
  };