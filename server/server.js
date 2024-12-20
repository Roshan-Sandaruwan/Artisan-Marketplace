import express from "express";
import cors from 'cors';
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import shopRoutes from "./routes/shop.route.js";
import userRoutes from "./routes/user.route.js";


const app = express();
const PORT = process.env.PORT || 5000;

//allow access JSON data in to body
app.use(express.json());

app.use(cors());

//Product api
app.use("/api/products", productRoutes);
app.use("/api/shops", shopRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost" + PORT);
});
