/*function Dashboard({ links }) {
  if (!links || links.length === 0) {
    return <p className="text-white mt-4">No links created yet.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-white mb-4">Dashboard</h2>
      <table className="min-w-full bg-gray-900 text-white rounded overflow-hidden">
        <thead>
          <tr className="bg-gray-800">
            <th className="py-2 px-4 text-left">Code</th>
            <th className="py-2 px-4 text-left">Target URL</th>
            <th className="py-2 px-4 text-left">Clicks</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link) => (
            <tr key={link.code} className="border-b border-gray-700">
              <td className="py-2 px-4">{link.code}</td>
              <td className="py-2 px-4">{link.longUrl}</td>
              <td className="py-2 px-4">{link.clicks ?? 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;*/
/*import { useEffect, useState } from "react";

function Dashboard({ links }) {
  const [stats, setStats] = useState([]);

  const fetchStats = async () => {
    try {
      const updatedStats = await Promise.all(
        links.map(async (link) => {
          const res = await fetch(`http://localhost:5000/api/links/${link.code}`);
          const data = await res.json();
          return data;
        })
      );
      setStats(updatedStats);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (links.length > 0) {
      fetchStats(); // initial fetch

      const interval = setInterval(fetchStats, 3000); // update every 3 sec
      return () => clearInterval(interval);
    }
  }, [links]);

  if (!links || links.length === 0) {
    return <p className="text-white mt-4">No links created yet.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-white mb-4">Dashboard</h2>
      <table className="min-w-full bg-gray-900 text-white rounded overflow-hidden">
        <thead>
          <tr className="bg-gray-800">
            <th className="py-2 px-4 text-left">Code</th>
            <th className="py-2 px-4 text-left">Target URL</th>
            <th className="py-2 px-4 text-left">Clicks</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((link) => (
            <tr key={link.code} className="border-b border-gray-700">
              <td className="py-2 px-4">{link.code}</td>
              <td className="py-2 px-4">{link.target_url}</td>
              <td className="py-2 px-4">{link.clicks ?? 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
*/
/*function Dashboard({ links, onDelete }) {
  if (!links || links.length === 0) {
    return <p className="text-white mt-4">No links created yet.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-white mb-4">Dashboard</h2>
      <table className="min-w-full bg-gray-900 text-white rounded overflow-hidden">
        <thead>
          <tr className="bg-gray-800">
            <th className="py-2 px-4 text-left">Code</th>
            <th className="py-2 px-4 text-left">Target URL</th>
            <th className="py-2 px-4 text-left">Clicks</th>
            <th className="py-2 px-4 text-left">Last Clicked</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link) => (
            <tr key={link.code} className="border-b border-gray-700">
              <td className="py-2 px-4">{link.code}</td>
              <td className="py-2 px-4 truncate max-w-xs">{link.target_url}</td>
              <td className="py-2 px-4">{link.clicks ?? 0}</td>
              <td className="py-2 px-4">{link.last_clicked ? new Date(link.last_clicked).toLocaleString() : "-"}</td>
              <td className="py-2 px-4">
                <button
                  className="bg-red-500 px-2 py-1 rounded"
                  onClick={() => onDelete(link.code)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;*/
/*
function Dashboard({ links, onDelete }) {
  if (!links || links.length === 0) {
    return <p className="text-white mt-4">No links created yet.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-white mb-4">Dashboard</h2>
      <table className="min-w-full bg-gray-900 text-white rounded overflow-hidden">
        <thead>
          <tr className="bg-gray-800">
            <th className="py-2 px-4 text-left">Code</th>
            <th className="py-2 px-4 text-left">Target URL</th>
            <th className="py-2 px-4 text-left">Clicks</th>
            <th className="py-2 px-4 text-left">Last Clicked</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link) => (
            <tr key={link.code} className="border-b border-gray-700">
              <td className="py-2 px-4">{link.code}</td>
              <td className="py-2 px-4 truncate max-w-xs">{link.target_url}</td>
              <td className="py-2 px-4">{link.clicks ?? 0}</td>
              <td className="py-2 px-4">
                {link.last_clicked ? new Date(link.last_clicked).toLocaleString() : "-"}
              </td>
              <td className="py-2 px-4">
                <button
                  className="bg-red-500 px-2 py-1 rounded"
                  onClick={() => onDelete(link.code)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;*/
/*function Dashboard({ links }) {
  if (!links || links.length === 0) {
    return <p className="text-white mt-4">No links created yet.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-white mb-4">Dashboard</h2>
      <table className="min-w-full bg-gray-900 text-white rounded overflow-hidden">
        <thead>
          <tr className="bg-gray-800">
            <th className="py-2 px-4 text-left">Code</th>
            <th className="py-2 px-4 text-left">Target URL</th>
            <th className="py-2 px-4 text-left">Clicks</th>
            <th className="py-2 px-4 text-left">Last Clicked</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link) => (
            <tr key={link.code} className="border-b border-gray-700">
              <td className="py-2 px-4">{link.code}</td>
              <td className="py-2 px-4 truncate max-w-xs">{link.target_url}</td>
              <td className="py-2 px-4">{link.clicks ?? 0}</td>
              <td className="py-2 px-4">
                {link.last_clicked ? new Date(link.last_clicked).toLocaleString() : "-"}
              </td>
              <td className="py-2 px-4">
                <button
                  className="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
                  onClick={async () => {
                    await fetch(`http://localhost:5000/api/links/${link.code}`, {
                      method: "DELETE",
                    });
                    window.location.reload(); // simple refresh to update dashboard
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;  */
/*function Dashboard({ links, onDelete }) {
  if (!links || links.length === 0) {
    return <p className="text-white mt-4">No links created yet.</p>;
  }

  return (
    <div className="bg-gray-900 p-6 rounded shadow-md mb-6 overflow-x-auto">
      <h2 className="text-2xl font-bold text-white mb-4">Dashboard</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Code</th>
            <th className="px-4 py-2 text-left">Target URL</th>
            <th className="px-4 py-2 text-left">Clicks</th>
            <th className="px-4 py-2 text-left">Last Clicked</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link) => (
            <tr key={link.code} className="border-b border-gray-700">
              <td className="px-4 py-2">{link.code}</td>
              <td className="px-4 py-2 truncate max-w-xs">{link.target_url}</td>
              <td className="px-4 py-2">{link.clicks ?? 0}</td>
              <td className="px-4 py-2">
                {link.last_clicked ? new Date(link.last_clicked).toLocaleString() : "-"}
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => onDelete(link.code)}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;  */
/*
function Dashboard({ links, onDelete }) {
  if (!links || links.length === 0) {
    return <p className="text-white mt-4">No links created yet.</p>;
  }

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6 overflow-x-auto">
      <h2 className="text-2xl font-bold text-white mb-4">Dashboard</h2>
      <table className="min-w-full border border-gray-700">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-6 py-3 text-left">Code</th>
            <th className="px-6 py-3 text-left">Target URL</th>
            <th className="px-6 py-3 text-left">Clicks</th>
            <th className="px-6 py-3 text-left">Last Clicked</th>
            <th className="px-6 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-gray-700 text-gray-100">
          {links.map((link) => (
            <tr key={link.code} className="border-b border-gray-600 hover:bg-gray-600">
              <td className="px-6 py-3 font-semibold">{link.code}</td>
              <td className="px-6 py-3 truncate max-w-sm">{link.target_url}</td>
              <td className="px-6 py-3">{link.clicks ?? 0}</td>
              <td className="px-6 py-3">
                {link.last_clicked ? new Date(link.last_clicked).toLocaleString() : "-"}
              </td>
              <td className="px-6 py-3">
                <button
                  onClick={() => onDelete(link.code)}
                  className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded text-white font-medium transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;*/
function Dashboard({ links, onDelete, onLinkClick }) {
  if (!links || links.length === 0) return <p className="text-white mt-4">No links created yet.</p>;

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6 overflow-x-auto">
      <h2 className="text-2xl font-bold text-white mb-4">Dashboard</h2>
      <table className="min-w-full border border-gray-700">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-6 py-3 text-left">Code</th>
            <th className="px-6 py-3 text-left">Target URL</th>
            <th className="px-6 py-3 text-left">Clicks</th>
            <th className="px-6 py-3 text-left">Last Clicked</th>
            <th className="px-6 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-gray-700 text-gray-100">
          {links.map((link) => (
            <tr key={link.code} className="border-b border-gray-600 hover:bg-gray-600">
              <td className="px-6 py-3 font-semibold">{link.code}</td>
              <td
                className="px-6 py-3 truncate max-w-sm text-blue-400 cursor-pointer"
                onClick={() => onLinkClick(link.code)}
              >
                {link.target_url}
              </td>
              <td className="px-6 py-3">{link.clicks ?? 0}</td>
              <td className="px-6 py-3">
                {link.last_clicked ? new Date(link.last_clicked).toLocaleString() : "-"}
              </td>
              <td className="px-6 py-3">
                <button
                  onClick={() => onDelete(link.code)}
                  className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded text-white font-medium transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;









