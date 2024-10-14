import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct, removeProduct } from './productSlice';

function Products() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);

  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
  });

  // จัดการการเปลี่ยนแปลงข้อมูลในฟอร์ม
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // จัดการการเพิ่มสินค้าใหม่
  const handleAddProduct = () => {
    const newId = productList.length + 1; // กำหนด ID ใหม่
    dispatch(addProduct({ ...newProduct, id: newId }));
    setNewProduct({ id: '', name: '', price: '', description: '' }); // รีเซ็ตฟอร์ม
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {productList.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name} - {product.price}
            </Link>
            <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <h2>Add New Product</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default Products;
