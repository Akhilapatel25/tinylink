/*import { pool } from "../db.js";

// Create short link
export const createLink = async (req, res) => {
  const { longUrl, code } = req.body;

  if (!longUrl) return res.status(400).json({ error: "URL required" });
  if (!code) return res.status(400).json({ error: "Code required" });

  const exists = await pool.query(
    "SELECT code FROM links WHERE code=$1",
    [code]
  );

  if (exists.rows.length > 0)
    return res.status(409).json({ error: "Code already exists" });

  await pool.query(
    "INSERT INTO links (code, target_url, clicks) VALUES ($1, $2, 0)",
    [code, longUrl]
  );

  res.json({ message: "Created", code });
};

// List links
export const getLinks = async (req, res) => {
  const rows = await pool.query("SELECT * FROM links ORDER BY created_at DESC");
  res.json(rows.rows);
};

// Stats for a single code
export const getOne = async (req, res) => {
  const rows = await pool.query(
    "SELECT * FROM links WHERE code=$1",
    [req.params.code]
  );

  if (rows.rows.length === 0)
    return res.status(404).json({ error: "Not found" });

  res.json(rows.rows[0]);
};

// Delete link
export const deleteLink = async (req, res) => {
  await pool.query("DELETE FROM links WHERE code=$1", [req.params.code]);
  res.json({ deleted: true });
};
*/
import { pool } from "../db.js";

// Create short link
export const createLink = async (req, res) => {
  const { longUrl, code } = req.body;

  if (!longUrl) return res.status(400).json({ error: "URL required" });
  if (!code) return res.status(400).json({ error: "Code required" });

  const exists = await pool.query("SELECT code FROM links WHERE code=$1", [code]);
  if (exists.rows.length > 0)
    return res.status(409).json({ error: "Code already exists" });

  await pool.query(
    "INSERT INTO links (code, target_url, clicks) VALUES ($1, $2, 0)",
    [code, longUrl]
  );

  res.json({ message: "Created", code, target_url: longUrl, clicks: 0, last_clicked: null });
};

// List all links
export const getLinks = async (req, res) => {
  const rows = await pool.query(
    "SELECT code, target_url, clicks, last_clicked FROM links ORDER BY created_at DESC"
  );
  res.json(rows.rows);
};

// Stats for a single code
export const getOne = async (req, res) => {
  const rows = await pool.query(
    "SELECT code, target_url, clicks, last_clicked FROM links WHERE code=$1",
    [req.params.code]
  );

  if (rows.rows.length === 0)
    return res.status(404).json({ error: "Not found" });

  res.json(rows.rows[0]);
};

// Delete link
export const deleteLink = async (req, res) => {
  await pool.query("DELETE FROM links WHERE code=$1", [req.params.code]);
  res.json({ deleted: true });
};
