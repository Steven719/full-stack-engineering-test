import { useState, useEffect } from "react";
import axios from "../../api/apiClient"; // Axios instance to fetch data

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/products"); // Fetch products from API
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Delete product
  const deleteProduct = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        // Make an API call to delete the product
        await axios.delete(`/products/${productId}`);
        // Remove product from the local state
        setProducts(products.filter((product) => product.id !== productId));
        alert("Product deleted successfully.");
      } catch (err) {
        setError(err);
      }
    }
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 border">Product ID</th>
            <th className="py-2 border">Name</th>
            <th className="py-2 border">Price</th>
            <th className="py-2 border">Category</th>
            <th className="py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.id}</td>
              <td className="border px-4 py-2">{product.title}</td>
              <td className="border px-4 py-2">${product.price}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
