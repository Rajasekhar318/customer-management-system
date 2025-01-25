import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import CustomerList from './components/CustomerList';
import AddCustomer from './components/AddCustomer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in on initial load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setIsLoggedIn(false); // Update login state
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customer Management</h1>

      {!isLoggedIn ? (
        <>
          <Register />
          <Login onLogin={() => setIsLoggedIn(true)} /> {/* Update state on login */}
        </>
      ) : (
        <>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded mb-4"
          >
            Logout
          </button>
          <AddCustomer />
        </>
      )}

      <CustomerList />
    </div>
  );
}

export default App;
