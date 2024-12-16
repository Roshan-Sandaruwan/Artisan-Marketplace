// import express from "express";

// import { connectDB } from "./config/db.js";
// import Product from "./models/Product.js";
// import mongoose from "mongoose";

// const app = express();

// app.use(express.json()); //allow access JSON data in to body

// // read
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json({ success: true, message: products });
//   } catch (error) {
//     console.log("Error in fetching products", error.message);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// });

// // create
// app.post("/api/products", async (req, res) => {
//   const product = req.body; //user will send this data

//   if (
//     !product.name ||
//     !product.price ||
//     !product.description ||
//     !product.image
//   ) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Please Provide all fields" });
//   }

//   const newProduct = new Product(product);

//   try {
//     await newProduct.save();
//     res.status(201).json({ success: true, data: newProduct });
//   } catch (error) {
//     console.error("Enter in create product", error.message);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// });

// //update
// app.patch("/api/products/:id", async (req, res) => {
//   const { id } = req.params;
//   const product = req.body;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Invalid product ID" });
//   }

//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(id, product, {
//       new: true,
//     });

//     if (!updatedProduct) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Product not found" });
//     }

//     res.status(200).json({ success: true, message:"Product Updated", data: updatedProduct });
//   } catch (error) {
//     console.error("Error in updating product", error.message);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// });

// //delete
// app.delete("/api/products/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     await Product.findByIdAndDelete(id);
//     res.status(200).json({ success: true, message: "Product Deleted" });
//   } catch (error) {
//     console.error("Error in deleting product", error.message);
//     res.status(404).json({ success: false, message: "Product not found" });
//   }
// });

// console.log(process.env.MONGO_URI);

// app.listen(5000, () => {
//   connectDB();
//   console.log("Server started at http://localhost:5000/");
// });