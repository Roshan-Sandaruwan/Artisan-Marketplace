import Product from "../models/Product.js";
import mongoose from "mongoose";

//Create product
export const createProduct = async (req, res) => {
  const product = req.body; //user will send this data

  if (
    !product.name ||
    !product.price ||
    !product.description ||
    !product.image
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please Provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Enter in create product", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//Read product
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, message: products });
  } catch (error) {
    console.log("Error in fetching products", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//Update product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid product ID" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res
      .status(200)
      .json({
        success: true,
        message: "Product Updated",
        data: updatedProduct,
      });
  } catch (error) {
    console.error("Error in updating product", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//Delete product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid product ID" });
  }

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product Deleted" });
  } catch (error) {
    console.error("Error in deleting product", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
