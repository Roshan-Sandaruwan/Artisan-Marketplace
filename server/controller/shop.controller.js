import Shop from "../models/Shop.js";

// create shop
export const createShop = async (req, res) => {
  const shop = req.body;

  if (!shop.name || !shop.description || !shop.coverImage) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newShop = new Shop(shop);

  //try chatch for save new shop
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
