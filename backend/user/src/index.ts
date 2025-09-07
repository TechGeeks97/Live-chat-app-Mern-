import dotenv from "dotenv";
dotenv.config(); // explicitly loads .env
import express from "express";
import connectDb from "./config/db.js";

connectDb();
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port} `));
