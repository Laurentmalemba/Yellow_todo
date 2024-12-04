// /src/components/Header.tsx

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <header className="w-full bg-secondary text-primary p-4 flex justify-between items-center">
      <Link href="/">
        <a className="text-lg font-bold">Todo App</a>
      </Link>
      <nav>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">
            Logout
          </button>
        ) : (
          <>
            <Link href="/login">
              <a className="px-4 py-2">Login</a>
            </Link>
            <Link href="/register">
              <a className="px-4 py-2">Register</a>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;