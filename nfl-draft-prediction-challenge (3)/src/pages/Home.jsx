import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">NFL Draft Prediction Challenge</h1>
      <p className="mb-6 text-lg">Join a group or create your own to make draft predictions.</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-green-700 text-white px-4 py-2 rounded-xl hover:bg-green-800">Login</Link>
        <Link to="/create-group" className="bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-800">Create Group</Link>
      </div>
    </div>
  );
}