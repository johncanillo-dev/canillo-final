import React from 'react';

function ProductFilter({ value, onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}

export default ProductFilter;
