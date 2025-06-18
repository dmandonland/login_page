// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-400 flex items-center justify-evenly">
      <div className="bg-[#fff] text-[#333] p-8 rounded-[12px] [box-shadow:0_8px_24px_rgba(0,_0,_0,_0.2)] w-[320px] text-center">
        <div className="text-center">
        <img src="/instaaaa.png" alt="Logo" className="mx-auto mb-6 w-24 h-24inline-block bg-top bg-auto w-[175px] h-[51px]" />
          <p className="mt-2 text-gray-600">Login to your account</p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder='Email address'
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder='Password'
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-gray-500 py-4">
          <p>Want to create an account? <Link href="/." className="text-pink-500 font-semibold hover:underline">SignUp</Link></p>
        </div>
      </div>
      <img src="/phones.png" alt="Background" className= "flex justify-evenly max-w-svh opacity-90" />
    </div>
  );
}