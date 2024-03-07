
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
}

export async function createBands(resource) {
  // Query the database to create an resource and return the newly created resource
}

export async function updateBandsById(id, updates) {
  // Query the database to update the resource and return the newly updated resource or null
}

export async function deleteBandsById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}