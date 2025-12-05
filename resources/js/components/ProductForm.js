import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductForm({ product, onSave, onCancel }) {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    quantity: ''
  });

  useEffect(() => {
    if (product) {
      setForm(product);
    } else {
      setForm({ name: '', description: '', price: '', quantity: '' });
    }
  }, [product]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (product && product.id) {
      axios.put(`/api/products/${product.id}`, form).then(() => {
        onSave();
      });
    } else {
      axios.post('/api/products', form).then(() => {
        onSave();
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h2>{product ? 'Edit' : 'Add'} Product</h2>
      <input 
        name="name" 
        value={form.name} 
        onChange={handleChange} 
        placeholder="Product Name" 
        required 
        style={{ padding: '8px' }}
      />
      <textarea 
        name="description" 
        value={form.description} 
        onChange={handleChange} 
        placeholder="Description" 
        style={{ padding: '8px', minHeight: '80px' }}
      />
      <input 
        name="price" 
        value={form.price} 
        onChange={handleChange} 
        placeholder="Price" 
        type="number" 
        step="0.01"
        required 
        style={{ padding: '8px' }}
      />
      <input 
        name="quantity" 
        value={form.quantity} 
        onChange={handleChange} 
        placeholder="Quantity" 
        type="number" 
        required 
        style={{ padding: '8px' }}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <button type="submit" style={{ padding: '10px 20px', flex: 1 }}>
          {product ? 'Update' : 'Add'} Product
        </button>
        <button 
          type="button" 
          onClick={onCancel} 
          style={{ padding: '10px 20px', flex: 1 }}
        >
          Clear
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
