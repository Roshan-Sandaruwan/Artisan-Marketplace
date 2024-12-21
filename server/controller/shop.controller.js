import Shop from "../models/Shop.js";
import mongoose from "mongoose";

// create shop
export const createShop = async (req, res) => {
  const shop = req.body;

  if (!shop.name || !shop.description || !shop.coverImage) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newShop = new Shop(shop);

  try {
    await newShop.save();
    res.status(201).json({
      success: true,
      message: "Shop created successfully",
      data: newShop,
    });
  } catch (error) {
    console.error("Error in creating shop", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//get shop
// export const getShops = async (req, res) => {
//   try {
//     const shops = await Shop.find({});
//     res.status(200).json({ success: true, data: shops });
//   } catch (error) {
//     console.log("Error in fetching shops", error.message);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };

export const getShops = async (req, res) => {
  try {
    const shops = await Shop.find();
    res.json({ data: shops });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//Update shop
// export const updateShop = async (req, res) => {
//   const { id } = req.params;
//   const shop = req.body;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Invalid shop ID" });
//   }

//   try {
//     const updatedShop = await Shop.findByIdAndUpdate(id, shop, {
//       new: true,
//     });

//     if (!updatedShop) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Shop not found" });
//     }

//     res.status(200).json({ success: true, data: updatedShop });
//   } catch (error) {
//     console.error("Error in updating shop", error.message);
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };

//Delete shop
// export const deleteShop = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Invalid shop ID" });
//   }

//   try {
//     await Shop.findByIdAndDelete(id);
//     res.status(200).json({ success: true, message: "Shop deleted successfully" });
//   } catch (error) {
//     console.error("Error in deleting shop", error.message);
//     res.status(500).json({ success: false, message: "Server Error" });    
//   }
// };