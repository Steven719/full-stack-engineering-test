import { useState } from "react";

const AccountSettings = () => {
  const [username, setUsername] = useState("MerchantUser");

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Account updated!");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      <form onSubmit={handleUpdate}>
        <label className="block mb-2">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded mb-4 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default AccountSettings;
