import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";

import router from "./routes";

console.log("Starting server!");

// Setup environment variables
config();
if (!process.env.MONGOURL) {
  throw new Error("MongoDB URL is missing. Check your .env file.");
}

// Connecting to database
mongoose.connect(process.env.MONGOURL);
mongoose.connection.on('connected', () => {
  console.log(`Connected to DB.`);
});
mongoose.connection.on('error', (error: any) => {
  console.log(`Connection Error: ${error}`)
});

// Server startup
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

console.log("Running server on port 4000!");
app.listen(process.env.PORT);