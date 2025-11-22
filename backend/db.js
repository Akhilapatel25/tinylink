/*import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});
/*const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // or your DB URL
  ssl: {
    rejectUnauthorized: false
  }
});
*/
import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: 'neondb_owner',
  host: 'ep-solitary-scene-a1n6gzwc.ap-southeast-1.aws.neon.tech',
  database: 'neondb',
  password: 'npg_gDUFL68oqysb',
  port: 5432,
  ssl: { rejectUnauthorized: false } // must be set for Neon
});

