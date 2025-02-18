// import React from 'react';
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Merchant Dashboard</h1>
      <div>
        <Link
          to="/merchant/manage-products"
          className="text-blue-500 mb-2 block"
        >
          Manage Products
        </Link>
        <Link to="/merchant/manage-orders" className="text-blue-500 mb-2 block">
          Manage Orders
        </Link>
        <Link to="/merchant/account-settings" className="text-blue-500">
          Account Settings
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
