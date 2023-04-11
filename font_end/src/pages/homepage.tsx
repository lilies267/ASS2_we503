import Product from "../components/product";
import { useEffect, useState } from "react";
import { IProduct } from "../models";
import { getAll } from "../api/product";

const Homepage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const fetchProducts = async () => {
    const { data } = await getAll();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="mt-8 mb-10 font-medium text-lg text-center">
        ĐIỆN THOẠI NỔI BẬT NHẤT
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <Product data={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
