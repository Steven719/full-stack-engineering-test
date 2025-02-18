import { useState, useEffect } from "react";
import axios from "../../api/apiClient"; // Axios instance to fetch data

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch orders on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/carts"); // Fake Store API endpoint for orders
        setOrders(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Update order status
  const updateStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    alert(`Order #${orderId} status updated to ${newStatus}`);
  };

  // Delete an order
  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    alert(`Order #${orderId} deleted.`);
  };

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Orders</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 border">Order ID</th>
            <th className="py-2 border">User ID</th>
            <th className="py-2 border">Date</th>
            <th className="py-2 border">Status</th>
            <th className="py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.userId}</td>
              <td className="border px-4 py-2">
                {new Date(order.date).toLocaleDateString()}
              </td>
              <td className="border px-4 py-2">
                <select
                  value={order.status || "Pending"}
                  onChange={(e) => updateStatus(order.id, e.target.value)}
                  className="border rounded p-1"
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => deleteOrder(order.id)}
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

export default ManageOrders;
