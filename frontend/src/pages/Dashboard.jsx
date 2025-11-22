
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
                {/* Visit button increments clicks */}
                <a
                  href={`https://tinylink-backend-tdu6.onrender.com/${link.code}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded text-white font-medium transition mr-2"
                >
                  Visit
                </a>
                {/* Delete button */}
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










