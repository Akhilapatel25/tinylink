/*import { useState, useEffect } from "react";

function Stats({ code }) {
  const [link, setLink] = useState(null);

  useEffect(() => {
    if (!code) return;
    fetch(`http://localhost:5000/api/links/${code}`)
      .then((res) => res.json())
      .then((data) => setLink(data))
      .catch((err) => console.error(err));
  }, [code]);

  if (!link) return <p>Loading...</p>;

  return (
    <div className="p-4 bg-gray-800 text-white rounded max-w-md mx-auto mt-4">
      <h2 className="text-xl font-bold mb-2">Link Stats</h2>
      <p>Code: {link.code}</p>
      <p>Target URL: {link.target_url}</p>
      <p>Clicks: {link.clicks}</p>
    </div>
  );
}

export default Stats;*/
/*import { useState, useEffect } from "react";

function Stats({ code }) {
  const [link, setLink] = useState(null);

  const fetchLink = async () => {
    if (!code) return;
    try {
      const res = await fetch(`http://localhost:5000/api/links/${code}`);
      const data = await res.json();
      setLink(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLink();
  }, [code]);

  const visitLink = async () => {
    if (!link) return;
    try {
      // Call the redirect route to increment clicks
      await fetch(`http://localhost:5000/${link.code}`, { method: "GET" });
      // Then fetch the latest stats
      fetchLink();
    } catch (err) {
      console.error(err);
    }
  };

  if (!link) return <p>Loading...</p>;

  return (
    <div className="p-4 bg-gray-800 text-white rounded max-w-md mx-auto mt-4">
      <h2 className="text-xl font-bold mb-2">Link Stats</h2>
      <p>Code: {link.code}</p>
      <p>Target URL: {link.target_url}</p>
      <p>Clicks: {link.clicks}</p>

      <button
        onClick={visitLink}
        className="mt-2 px-3 py-1 bg-blue-500 rounded hover:bg-blue-600"
      >
        Visit Link
      </button>

      <button
        onClick={fetchLink}
        className="mt-2 ml-2 px-3 py-1 bg-green-500 rounded hover:bg-green-600"
      >
        Refresh Stats
      </button>
    </div>
  );
}

export default Stats; */
/*import { useState, useEffect } from "react";

function Stats({ code }) {
  const [link, setLink] = useState(null);

  const fetchLink = async () => {
    if (!code) return;
    try {
      const res = await fetch(`http://localhost:5000/api/links/${code}`);
      const data = await res.json();
      setLink(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLink();
    // optional: refresh every 5 seconds
    const interval = setInterval(fetchLink, 5000);
    return () => clearInterval(interval);
  }, [code]);

  if (!link) return <p>Loading...</p>;

  return (
    <div className="p-4 bg-gray-800 text-white rounded max-w-md mx-auto mt-4">
      <h2 className="text-xl font-bold mb-2">Link Stats</h2>
      <p>Code: {link.code}</p>
      <p>Target URL: {link.target_url}</p>
      <p>Clicks: {link.clicks}</p>
      <div className="mt-2 flex gap-2">
        <a
          href={`http://localhost:5000/${link.code}`}
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
        >
          Visit Link
        </a>
        <button
          onClick={fetchLink}
          className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
        >
          Refresh Stats
        </button>
      </div>
    </div>
  );
}

export default Stats;
*/
/*import { useState, useEffect } from "react";

function Stats({ code }) {
  const [link, setLink] = useState(null);

  useEffect(() => {
    if (!code) return;

    const fetchLink = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/links/${code}`);
        const data = await res.json();
        setLink(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLink();
  }, [code]);

  if (!link) return <p className="text-white mt-4">Loading...</p>;

  return (
    <div className="bg-gray-800 p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Link Stats</h2>
      <p><strong>Code:</strong> {link.code}</p>
      <p><strong>Target URL:</strong> {link.target_url}</p>
      <p><strong>Clicks:</strong> {link.clicks}</p>
      <p><strong>Last Clicked:</strong> {link.last_clicked ? new Date(link.last_clicked).toLocaleString() : "-"}</p>
    </div>
  );
}

export default Stats;  */
/*
import { useState, useEffect } from "react";

function Stats({ code }) {
  const [link, setLink] = useState(null);

  useEffect(() => {
    if (!code) return;
    const fetchLink = async () => {
      try {
        const res = await fetch(`https://tinylink-backend-tdu6.onrender.com/api/links/${code}`);
        const data = await res.json();
        setLink(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchLink();
  }, [code]);

  if (!link) return <p className="text-white mt-4">Loading stats...</p>;

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">Link Stats</h2>
      <p className="mb-2"><span className="font-semibold">Code:</span> {link.code}</p>
      <p className="mb-2"><span className="font-semibold">Target URL:</span> {link.target_url}</p>
      <p className="mb-2"><span className="font-semibold">Clicks:</span> {link.clicks}</p>
      <p className="mb-2">
        <span className="font-semibold">Last Clicked:</span> {link.last_clicked ? new Date(link.last_clicked).toLocaleString() : "-"}
      </p>
    </div>
  );
}

export default Stats;*/
import { useState, useEffect } from "react";

function Stats({ code }) {
  const [link, setLink] = useState(null);

  useEffect(() => {
    if (!code) return;

    const fetchLink = async () => {
      try {
        const res = await fetch(
          `https://tinylink-backend-tdu6.onrender.com/api/links/${code}`
        );
        const data = await res.json();
        setLink(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLink();

    // Optional: refresh stats every 5 seconds to show updated clicks
    const interval = setInterval(fetchLink, 5000);
    return () => clearInterval(interval);
  }, [code]);

  if (!link) return <p className="text-white mt-4">Loading stats...</p>;

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">Link Stats</h2>
      <p className="mb-2"><span className="font-semibold">Code:</span> {link.code}</p>
      <p className="mb-2"><span className="font-semibold">Target URL:</span> {link.target_url}</p>
      <p className="mb-2"><span className="font-semibold">Clicks:</span> {link.clicks}</p>
      <p className="mb-2">
        <span className="font-semibold">Last Clicked:</span> {link.last_clicked ? new Date(link.last_clicked).toLocaleString() : "-"}
      </p>
    </div>
  );
}

export default Stats;



