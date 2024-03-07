import { pool } from "../index.js";



// >>> MAKE SURE YOU UNDERSTAND THIS FILE AND WHAT IT'S DOING <<<
// >>> FEEL FREE TO CHANGE IT TO MAKE YOUR OWN RESOURCES (TABLES AND PROPERTIES) - YOU DON'T HAVE TO USE ALBUMS AND ARTISTS <<<



async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
        DROP TABLE IF EXISTS bands CASCADE;
        DROP TABLE IF EXISTS venues CASCADE;
    `);

    // Create the bands table
    await pool.query(`
        CREATE TABLE bands (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            country VARCHAR(255),
            genre VARCHAR(255)
        );
    `);

    // Create the venues table with a foreign key to the bands table
    await pool.query(`
        CREATE TABLE venues (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            capacity INT,
            city VARCHAR(255),
            bands_id INT REFERENCES bands(id)
        );
    `);

    // Create the dates table with foreign key to the bands table and venue table
//     await pool.query(`
//     CREATE TABLE venues (
//         id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//         date DATE NOT NULL,
//         bands_id INT REFERENCES bands(id),
//         venue_id INT REFERENCES venues(id)
//     );
// `);

    // Seed the artists table
    await pool.query(`
        INSERT INTO bands (name, country, genre)
        VALUES 
            ('Arctic Mokeys', 'UK', 'Brit Rock'),
            ('Architects', 'US', 'Heavy Metal'),
            ('M83', 'France', 'Electronic');
    `);

    // Seed the venues table
    await pool.query(`
        INSERT INTO venues (name, capacity, city, bands_id)
        VALUES 
            ('O2 Academy Brixton', 2000, 'London', 2),
            ('Kia Forum', 17500, 'Los Angeles', 1),
            ('Terminal 5', 3000, 'New York', 3);
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
