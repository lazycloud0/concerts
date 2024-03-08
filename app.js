// Import the required modules
import express from "express";



//Import your helper functions for your first resource here
import {
  getBands,
  getBandsById,
  createBand,
  updateBandsById,
  deleteBandsById,
} from "./bands.js";


// Import your helper functions for your second resource here
// import {
//   getResourceTwo,
//   getResourceTwoById,
//   createResourceTwo,
//   updateResourceTwoById,
//   deleteResourceTwoById,
// } from "./resource_two.js";



// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests




// Resource One Route Handlers

// Endpoint to retrieve all <resource_one>
app.get("/bands/", async function (req, res) {
    const bands = await getBands();
    res.status(200).json({status: "success", data: bands})
});

// Endpoint to retrieve a <resource_one> by id
app.get("/bands/:id", async function (req, res) {
  const id = req.params.id;
  const band = await getBandsById(id);
  if (!band) {
    res.status(404).json({status: "fail", msg: "Not found" });
  } else {
    res.status(200).json({status: "success", data: band});
  }

});

// Endpoint to create a new <resource_one>
app.post("/bands/", async function (req, res) {
  const data = req.body;
  const band = await createBand(data);
  res.status(201).json({status: "success", data: band});
});

// Endpoint to update a specific <resource_one> by id
app.put("/bands/:id", async function (req, res) {
  const id = req.params.id;
  const data = req.body;
  const band = await updateBandsById(id, data);
  if (!band) {
    res.status(404).json({status: "fail", msg: "Not found" });
  } else {
  res.status(200).json({status: "success", data: band});
  }
});

// Endpoint to delete a specific <resource_one> by id
app.delete("/bands/:id", async function (req, res) {
  const id = req.params.id;
  const band = await deleteBandsById(id);
  if (!band) {
    res.status(404).json({status: "fail", msg: "Not found" });
  } else {
    res.status(200).json({status: "success", data: band});
  }
});




// Resource Two Route Handlers

// Endpoint to retrieve all <resource_twos>
app.get("/venues/", async function (req, res) {
    const venues = await getVenues();
    res.status(200).json({ status: "success", data: authors });
  });
  
  // Endpoint to retrieve a <resource_twos> by id
  app.get("/venues/:id", async function (req, res) {
  });
  
  // Endpoint to create a new <resource_twos>
  app.post("/venues/", async function (req, res) {
  });
  
  // Endpoint to update a specific <resource_twos> by id
  app.patch("/venues/:id", async function (req, res) {
  });
  
  // Endpoint to delete a specific <resource_twos> by id
  app.delete("/venues/:id", async function (req, res) {
  });





// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});