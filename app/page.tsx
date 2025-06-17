"use client";

// app/page.tsx
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form refresh

    setShowSuccess(true); // Show success popup

    // Navigate after 2 seconds
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600">
      <div className="bg-white text-[#333] p-10 rounded-2xl shadow-2xl w-[350px] text-center">
        <div className="text-center">
          <img src="/logo.svg" alt="Logo" className="mx-auto mb-6 w-24 h-24" />
          <h1 className="text-3xl font-montserrat mb-4 text-transparent bg-clip-text bg-gray-900">Sign Up</h1>
          <p className="mb-6 text-gray-500">Sign up to see photos and videos from your friends.</p>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 bg-gray-50"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="Password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 bg-gray-50"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-400 transition-colors duration-200"
          >
            Sign Up
          </button>
        </form>
        <div className="text-gray-500 py-4">
          <p>Already have an account? <Link href="/login" className="text-pink-500 font-semibold hover:underline">Login</Link></p>
        </div>
        {showSuccess && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">
            ✅ Sign Up Successful!
          </div>
        )}
      </div>
    </div>
  );
}