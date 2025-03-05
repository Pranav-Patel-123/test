"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login"); // Redirect to login if no token
    } else {
      setUser("User"); // Replace with actual user data if decoding JWT
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Welcome, {user}!</h2>
      <p className="text-gray-600 mb-6">You have successfully logged in.</p>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-200 font-semibold"
      >
        Logout
      </button>
    </div>
  );
}
