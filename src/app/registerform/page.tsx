// /src/app/register.tsx

import { useState } from "react";
import { register } from "../api/auth";
import LoginForm from "@/components/LoginForm";

const RegisterPage = () => {
  const [message, setMessage] = useState<string | null>(null);

  const handleRegister = async ({ email, password }: { email: string; password: string }) => {
    const response = await register(email, password);
    setMessage(response.message);

    if (response.success) {
      localStorage.setItem("token", response.token || "");
      window.location.href = "/login";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary text-white">
      <div className="bg-white text-primary p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {message && <p className="text-red-500">{message}</p>}
        <LoginForm onSubmit={handleRegister} />
      </div>
    </div>
  );
};

export default RegisterPage;