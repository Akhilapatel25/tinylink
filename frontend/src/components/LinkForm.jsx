/*import { useState } from 'react';

function LinkForm({ onLinkCreated }) {
  const [longUrl, setLongUrl] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!longUrl || !code) {
      setError('Both fields are required.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/links', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ longUrl, code }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong!');
      } else {
        setSuccess(`Link created! Code: ${data.code}`);
        setLongUrl('');
        setCode('');
        onLinkCreated && onLinkCreated(data);
      }
    } catch (err) {
      setError('Server error. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-800 rounded-md text-white">
      <h2 className="text-2xl font-bold mb-4">Create Short Link</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="url"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="p-2 rounded bg-gray-700 border border-gray-600"
          required
        />
        <input
          type="text"
          placeholder="Enter code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="p-2 rounded bg-gray-700 border border-gray-600"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
        >
          Create
        </button>
      </form>
      {error && <p className="mt-2 text-red-500">{error}</p>}
      {success && <p className="mt-2 text-green-500">{success}</p>}
    </div>
  );
}

export default LinkForm;*/
// src/components/LinkForm.jsx
/*
import { useState } from "react";

export default function LinkForm() {
  const [longUrl, setLongUrl] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl, code }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(`Link created: ${data.code}`);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div>
      <h2>Create Short Link</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
*/
/*import { useState } from "react";

export default function LinkForm({ onLinkCreated }) {
  const [longUrl, setLongUrl] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl, code }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(`Link created: ${data.code}`);
        if (onLinkCreated) onLinkCreated(data); // pass new link to parent
        setLongUrl("");
        setCode("");
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div className="p-6 bg-gray-900 rounded-lg max-w-md mx-auto mb-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Create Short Link</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="px-3 py-2 rounded border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Enter code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="px-3 py-2 rounded border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
        >
          Create
        </button>
      </form>
      {message && <p className="mt-3 text-white">{message}</p>}
    </div>
  );
}*/
/*import { useState } from "react";

export default function LinkForm({ onLinkCreated }) {
  const [longUrl, setLongUrl] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateCode = (c) => /^[A-Za-z0-9]{6,8}$/.test(c);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateUrl(longUrl)) {
      setMessage("Invalid URL format");
      return;
    }
    if (!validateCode(code)) {
      setMessage("Code must be 6-8 alphanumeric characters");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl, code }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(`Link created: ${data.code}`);
        onLinkCreated(data); // update parent state
        setLongUrl("");
        setCode("");
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-white mb-2">Create Short Link</h2>
      <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
        <input
          type="text"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="p-2 rounded"
        />
        <input
          type="text"
          placeholder="Enter code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create
        </button>
      </form>
      {message && <p className="mt-2 text-yellow-400">{message}</p>}
    </div>
  );
}*/
import { useState } from "react";

export default function LinkForm({ onLinkCreated }) {
  const [longUrl, setLongUrl] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl, code }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(`Link created: ${data.code}`);
        onLinkCreated(data);
        setLongUrl("");
        setCode("");
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
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



