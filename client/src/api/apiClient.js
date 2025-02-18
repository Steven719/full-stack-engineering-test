import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com", // Change this to your backend URL if needed
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = () => apiClient.get("/products");
export const getProductById = (id) => apiClient.get(`/products/${id}`);
export const createOrder = (orderData) => apiClient.post("/orders", orderData);

export default apiClient;
