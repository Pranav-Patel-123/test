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
          className="px-6 py-3 text-lg bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200 font-semibold"
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className="px-6 py-3 text-lg bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-200 font-semibold"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}
