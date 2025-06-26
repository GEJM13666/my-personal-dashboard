import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-400">
          Welcome to Personnel Dashboard App!
        </h1>
        <p className="text-lg">My name is <span className="font-semibold text-white">Sakan Wokkum</span>.</p>
        <p className="text-lg">My student ID is <span className="font-mono text-yellow-300">652021073</span>.</p>
        <p className="text-lg">
          Navigate to the{" "}
          <Link href="/dashboard" className="text-blue-300 underline hover:text-blue-500">
            Dashboard
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
