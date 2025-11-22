/*import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import LinkForm from './components/LinkForm';
import Dashboard from './pages/Dashboard';
import Stats from './pages/Stats';

function App() {
  const [links, setLinks] = useState([]);

  return (
    <div className="p-6">
      {/* Logos *//*}
      <div className="flex gap-4 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-white">Vite + React</h1>

      {/* Link Form *//*}
      <LinkForm onLinkCreated={(newLink) => setLinks([...links, newLink])} />

      {/* Dashboard *//*}
      <Dashboard links={links} />

      {/* Stats for each link *//*}
      {links.map(
        (link) =>
          link.code && <Stats key={link.code} code={link.code} />
      )}

      <h1 className="text-4xl font-bold text-blue-500">Hello Tailwind!</h1>

    </div>
  );
}

export default App;
*/
/*
import { useState, useEffect } from "react";
import LinkForm from "./components/LinkForm";
import Dashboard from "./pages/Dashboard";
import Stats from "./pages/Stats";

function App() {
  const [links, setLinks] = useState([]);
  const [lastCode, setLastCode] = useState("");

  // Fetch all links
  const fetchLinks = async () => {
    const res = await fetch("http://localhost:5000/api/links");
    const data = await res.json();
    setLinks(data);
    if (data.length > 0) setLastCode(data[data.length - 1].code);
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  // Handle link creation
  const handleLinkCreated = async () => {
    await fetchLinks(); // refresh after creating new link
  };

  // Handle delete
  const handleDelete = async (code) => {
    await fetch(`http://localhost:5000/api/links/${code}`, { method: "DELETE" });
    await fetchLinks(); // refresh after delete
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-white">TinyLink</h1>

      <LinkForm onLinkCreated={handleLinkCreated} />

      <Dashboard links={links} onDelete={handleDelete} />

      {lastCode && <Stats code={lastCode} />}
    </div>
  );
}

export default App;
  */
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

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-white">TinyLink</h1>

      <LinkForm onLinkCreated={fetchLinks} />

      <Dashboard links={links} onDelete={fetchLinks} />

      {links.map((link) => (
        <Stats key={link.code} code={link.code} />
      ))}
    </div>
  );
}

export default App;
