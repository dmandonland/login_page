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
    <div className="min-h-screen flex items-center justify-between bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600">
      <img src="/phones.png" alt="Background" className= "flex justify-evenly max-w-svh opacity-90" />
      <div className="bg-white text-[#333] p-10 rounded-2xl shadow-3x1 w-[350px] text-center m-auto">
        <div className="text-center">
          <img src="/instaaaa.png" alt="Logo" className="inline-block bg-top bg-auto w-[175px] h-[51px]" />
          <p className="mb-6 mt-4 text-gray-500">Sign up to see photos and videos from your friends.</p>
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
            className="w-full py-2 px-4 rounded-md shadow-sm text-sm font-montserrat font-medium text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-yellow-600 hover:to-purple-600 transition-colors duration-200"
          >
            Sign Up
          </button>
        </form>
        <div className="text-gray-500 py-4">
          <p>Already have an account? <Link href="/login" className="text-purple-600 font-semibold hover:underline">Login</Link></p>
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