import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList({ onEdit, onDelete }) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    let url = '/api/products';
    if (filter) url += `?name=${encodeURIComponent(filter)}`;
    axios.get(url).then(res => setProducts(res.data));
  }, [filter]);

  function handleDelete(id) {
    axios.delete(`/api/products/${id}`).then(() => {
      setProducts(products.filter(p => p.id !== id));
      onDelete();
    });
  }

  return (
    <div>
      <h2>Product List</h2>
      <input 
        type="text" 
        placeholder="Filter by name" 
        value={filter} 
        onChange={e => setFilter(e.target.value)} 
        style={{ padding: '8px', marginBottom: '10px', width: '100%' }}
      />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map(product => (
          <li key={product.id} style={{ 
            padding: '10px', 
            border: '1px solid #ddd', 
            marginBottom: '10px',
            borderRadius: '4px'
          }}>
            <b>{product.name}</b> (${product.price}) - Qty: {product.quantity}
            <br />
            <small>{product.description}</small>
            <br />
            <button onClick={() => onEdit(product)} style={{ marginRight: '5px' }}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
