import { useState, useEffect } from "react";
import LinkForm from "./components/LinkForm";
import Dashboard from "./pages/Dashboard";
import Stats from "./pages/Stats";

function App() {
  const [links, setLinks] = useState([]);

  const fetchLinks = async () => {
    try {
      const res = await fetch("https://tinylink-backend-tdu6.onrender.com/api/links");
      const data = await res.json();
      setLinks(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (code) => {
    try {
      await fetch(`https://tinylink-backend-tdu6.onrender.com/api/links/${code}`, {
        method: "DELETE",
      });
      fetchLinks(); // refresh after deletion
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-white">TinyLink</h1>

      <LinkForm onLinkCreated={fetchLinks} />
      <Dashboard links={links} onDelete={handleDelete} />

      {links.map((link) => (
        <Stats key={link.code} code={link.code} />
      ))}
    </div>
  );
}

export default App;
