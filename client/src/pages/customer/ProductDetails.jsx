import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/apiClient";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((response) => setProduct(response.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover mt-4"
      />
      <p className="text-xl mt-4">${product.price}</p>
      <p className="mt-2">{product.description}</p>
    </div>
  );
};

export default ProductDetails;
