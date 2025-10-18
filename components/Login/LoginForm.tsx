"use client";

import { useState } from "react";
import SocialButtons from "./SocialButtons";
import Image from "next/image";
import logoImg from "../../public/logo.png"

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Login successful! Redirecting...");
      // In real app, redirect to dashboard
    }, 2000);
  };

  return (
    <div className=" text-black bg-white shadow-lg rounded-2xl p-8 w-full max-w-md relative">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image src={logoImg} alt="Logo" width={120} height={40} />
      </div>

      <h1 className="text-2xl font-bold text-gray-900 text-center">Sign In</h1>
      <p className="text-gray-500 text-center mb-6">Enter your credentials to access your account</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div className="relative">
          <input
            type="email"
            placeholder="Email Address"
            className={`w-full px-4 py-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={`w-full px-4 py-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <i
            className={`fas absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${
              showPassword ? "fa-eye-slash" : "fa-eye"
            }`}
            onClick={() => setShowPassword(!showPassword)}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Options */}
        <div className="flex justify-between items-center text-sm mb-4">
          <label className="flex items-center gap-1">
            <input type="checkbox" className="accent-indigo-500" /> Remember me
          </label>
          <a href="#" className="text-indigo-500 font-medium">Forgot password?</a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-md font-medium hover:shadow-lg flex justify-center items-center gap-2 transition"
        >
          {loading ? <span className="loader w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : "Sign In"}
        </button>

        <div className="flex items-center my-4 text-gray-400 text-sm">
          <span className="flex-grow border-t" /> <span className="mx-2">or continue with</span> <span className="flex-grow border-t" />
        </div>

        {/* Social login */}
        <SocialButtons />

        {/* Register link */}
        <p className="text-center text-gray-500 text-sm mt-4">
          Don't have an account? <a href="#" className="text-indigo-500 font-medium">Sign up</a>
        </p>
      </form>
    </div>
  );
}
