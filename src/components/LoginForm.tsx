// /src/components/LoginForm.tsx
'use client';

import { useState } from "react";

const LoginForm = ({ onSubmit }: { onSubmit: (data: { email: string; password: string }) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded-md"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded-md"
      />
      <button type="submit" className="bg-primary text-white py-2 rounded-md">
        Login
      </button>
    </form>
  );
};

export default LoginForm;