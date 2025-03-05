import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-6 text-center">
        Welcome to Poonam Hardware
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Sign up or log in to get started.
      </p>
      <div className="flex space-x-4">
        <Link
          href="/signup"
          aria-label="Sign up for an account"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          aria-label="Log in to your account"
          className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}
