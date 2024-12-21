import express from "express";
import { createShop, getShops, updateShop, deleteShop } from "../controller/shop.controller.js";


const router = express.Router();

// shop CRUD
router.post("/", createShop);
router.get("/", getShops);
router.patch("/:id", updateShop);
router.delete("/:id", deleteShop);

export default router;