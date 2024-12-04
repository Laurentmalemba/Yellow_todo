// /src/app/login

import { useState } from "react";
import { login } from "../api/auth";
import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  const [message, setMessage] = useState<string | null>(null);

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    const response = await login(email, password);
    setMessage(response.message);

    if (response.success) {
      localStorage.setItem("token", response.token || "");
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary text-white">
      <div className="bg-white text-primary p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {message && <p className="text-red-500">{message}</p>}
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;