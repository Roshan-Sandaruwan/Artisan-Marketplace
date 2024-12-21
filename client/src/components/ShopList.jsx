import { useEffect, useState } from 'react';
import axios from 'axios';

const ShopList = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/shops');
        setShops(response.data.data);
      } catch (error) {
        console.error('Error fetching shops:', error);
      }
    };

    fetchShops();
  }, []);

  return (
    
    <div>
      <ul>
        {shops.map((shop) => (
          <li key={shop._id}>
            <h2>{shop.name}</h2>
            <p>{shop.description}</p>
            <img src={shop.coverImage} alt={shop.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopList;