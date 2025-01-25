import React, { useEffect, useState } from 'react';
import API from '../services/api';

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);

  const fetchCustomers = async () => {
    try {
      const { data } = await API.get('/customers');
      setCustomers(data);
    } catch (error) {
      setError(error.response ? error.response.data.error : 'Error fetching customers');
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Customers</h1>
      <ul className="list-disc pl-5">
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
