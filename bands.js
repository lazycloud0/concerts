
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getBands() {
  // Query the database and return all resource ones
  // Define SQL query to fetch all data from bands table
  const queryText = "SELECT * FROM bands";
  // Use pool object to send query to db
  const result = await pool.query(queryText);
  // rows property of the result object contains the retrieved data
  return result.rows;
}

export async function getBandsById(id) {
  // Query the database and return the resource with a matching id or null
  const queryText = "SELECT * FROM bands WHERE id=$1";
  const result = await pool.query(queryText, [id]);
  return result.rows[0] || null;
}

export async function createBand(band) {
  // Query the database to create an resource and return the newly created resource
  const queryText = `INSERT INTO bands (name, country, genre) VALUES ($1, $2, $3) RETURNING *`;
  const result = await pool.query(queryText, [band.name, band.country, band.genre]);
  return result.rows[0] || null;
}

export async function updateBandsById(id, updates) {
  // Query the database to update the resource and return the newly updated resource or null
  const queryText = `UPDATE bands SET name=$1, country=$2, genre=$3 WHERE id=$4 RETURNING *`;
  const result = await pool.query(queryText, [updates.name, updates.country, updates.genre, id]);
  return result.rows[0] || null;
}

export async function deleteBandsById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}