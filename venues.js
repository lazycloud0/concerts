
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getCheeses() {
  // Query the database and return all resource twos
}

export async function getCheesesById(id) {
  // Query the database and return the resource with a matching id or null
}

export async function createCheeses(resource) {
  // Query the database to create an resource and return the newly created resource
}

export async function updateCheesesById(id, updates) {
  // Query the database to update the resource and return the newly updated resource or null
}

export async function deleteCheesesById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}