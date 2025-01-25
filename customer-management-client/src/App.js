import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import CustomerList from './components/CustomerList';
import AddCustomer from './components/AddCustomer';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshCustomers = () => {
    setRefreshKey((oldKey) => oldKey + 1); // Trigger refresh
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customer Management</h1>
      <Register />
      <Login />
      <AddCustomer onCustomerAdded={refreshCustomers} />
      <CustomerList key={refreshKey} />
    </div>
  );
}

export default App;