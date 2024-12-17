import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controller/product.controller.js";

const router = express.Router();

//product CRUD
router.post("/", createProduct);
router.get("/", getProducts);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;