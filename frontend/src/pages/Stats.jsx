
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

export default Stats;




