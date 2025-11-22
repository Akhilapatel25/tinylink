
import { useState } from "react";

export default function LinkForm({ onLinkCreated }) {
  const [longUrl, setLongUrl] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!longUrl || !code) {
      setMessage("Both URL and code are required.");
      return;
    }

    try {
      const res = await fetch(
        "https://tinylink-backend-tdu6.onrender.com/api/links",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ longUrl, code }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMessage(`Link created: ${data.code}`);
        onLinkCreated(); // fetch latest links
        setLongUrl("");
        setCode("");
      } else {
        setMessage(`Error: ${data.error || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Create Link Error:", err);
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Create Short Link</h2>
      <form className="flex flex-col md:flex-row gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="flex-1 p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Enter code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
        >
          Create
        </button>
      </form>
      {message && <p className="mt-3 text-green-400">{message}</p>}
    </div>
  );
}




