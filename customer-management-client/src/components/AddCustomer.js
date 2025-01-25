import React, { useState } from 'react';
import API from '../services/api';

function AddCustomer({ onCustomerAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/customers', formData);
      alert('Customer added successfully!');
      setFormData({ name: '', email: '', phone: '', company: '' }); // Clear form
      if (onCustomerAdded) onCustomerAdded(); // Refresh customer list
    } catch (error) {
      alert('Error adding customer: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 p-4 border rounded shadow-md">
      <h2 className="text-lg font-bold">Add Customer</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        required
        className="border p-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleInputChange}
        required
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="company"
        placeholder="Company (optional)"
        value={formData.company}
        onChange={handleInputChange}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Customer
      </button>
    </form>
  );
}

export default AddCustomer;
