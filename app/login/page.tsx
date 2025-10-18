"use client";

import Illustration from "@/components/Login/Illustration";
import LoginForm from "@/components/Login/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-gray-100 overflow-hidden">
      {/* Illustration Section */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-500 to-indigo-700 relative items-center justify-center">
        <Illustration />
      </div>

      {/* Login Section */}
      <div className="flex-1 flex items-center justify-center p-6 relative">
        <LoginForm />
      </div>
    </div>
  );
}
