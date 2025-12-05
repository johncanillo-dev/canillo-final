import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

function Routers() {
  const [editingProduct, setEditingProduct] = useState(null);
  const [refresh, setRefresh] = useState(false);

  function handleEdit(product) {
    setEditingProduct(product);
  }

  function handleSave() {
    setEditingProduct(null);
    setRefresh(!refresh);
  }

  function handleCancel() {
    setEditingProduct(null);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Inventory Manager</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <ProductList 
            key={refresh} 
            onEdit={handleEdit} 
            onDelete={() => setRefresh(!refresh)} 
          />
        </div>
        <div style={{ flex: 1, borderLeft: '1px solid #ccc', paddingLeft: '20px' }}>
          <ProductForm 
            product={editingProduct} 
            onSave={handleSave} 
            onCancel={handleCancel} 
          />
        </div>
      </div>
    </div>
  );
}

export default Routers;
