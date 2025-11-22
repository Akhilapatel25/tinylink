
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import linkRoutes from "./routes/linkRoutes.js";
import { pool } from "./db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Health check endpoint
app.get("/healthz", (req, res) => {
  res.status(200).json({ ok: true, version: "1.0" });
});

// API routes
app.use("/api/links", linkRoutes);

// Redirect route: /:code
app.get("/:code", async (req, res) => {
  const code = req.params.code;

  try {
    const result = await pool.query(
      "SELECT target_url FROM links WHERE code=$1",
      [code]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Not found" });
    }

    const url = result.rows[0].target_url;

    // Increment clicks and update last_clicked
    await pool.query(
      "UPDATE links SET clicks = clicks + 1, last_clicked = NOW() WHERE code=$1",
      [code]
    );

    res.redirect(302, url);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
