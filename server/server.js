import express from "express";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

const app = express();

app.use(express.json()); //allow access JSON data in to body

// main Product Route
app.use("/api/products", productRoutes);

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000/");
});
