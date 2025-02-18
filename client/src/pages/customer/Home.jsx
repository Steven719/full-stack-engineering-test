import { useEffect, useState } from "react";
import { getProducts } from "../../api/apiClient";
import ProductList from "./ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProducts(response.data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our E-Shop</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
