import { useEffect, useState } from "react";
import axios from "axios";

const ShopList = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/shops");
        setShops(response.data.data);
      } catch (error) {
        console.error("Error fetching shops:", error);
      }
    };

    fetchShops();
  }, []);

  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shops.map((shop) => (
            <div
              key={shop._id}
              className="bg-gray-100 rounded-lg shadow overflow-hidden"
            >
              <img
                src={shop.coverImage}
                alt={shop.name}
                className="h-32 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-700">
                  {shop.name}
                </h3>
                <p className="text-sm text-gray-500">{shop.description}</p>
                <p className="text-xs text-gray-400 mt-2">
                  {shop.shopLocation}
                </p>
                <button className="mt-4 text-blue-600 text-sm font-medium">
                  Visit Shop
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopList;
