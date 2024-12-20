import express from "express";
import { createShop } from "../controller/shop.controller.js";


const router = express.Router();

// shop CRUD
router.post("/", createShop);

export default router;