import express from "express";
import { connectDB } from "./config/db.js";
import Product from "./models/Product.js";


const app = express();

app.post("/products", async (req, res)=>{
  const product = req.body; //user will send this data

  if(!product.name || !product.price || !product.description || !product.image){
    return res.status(400).json({ success:false, message: "Please Provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({success:true, data: newProduct});
  } catch (error) {
    console.error("Enter in create product", error.message);
    res.status(500).json({success:false, message:"Server Error" });
    
  }
});

console.log(process.env.MONGO_URI);

app.listen(5000,()=>{
  connectDB();
  console.log("Server started at http://localhost:5000/");
});