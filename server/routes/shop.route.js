import express from "express";

// import { createShop, getShops, updateShop, deleteShop } from "../controller/shop.controller.js";
import { createShop, getShops } from "../controller/shop.controller.js";


// import Shop from "../models/Shop.js";



const router = express.Router();

// shop CRUD
router.post("/", createShop);
// router.get("/", getShops);
// router.patch("/:id", updateShop);
// router.delete("/:id", deleteShop);

router.get('/', getShops);


export default router;