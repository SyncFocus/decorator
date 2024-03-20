import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form, Input, Button, message, Select } from 'antd';
import AdminHeader from '../components/AdminHeader';

const { Option } = Select;

const AddProduct = () => {
  const [form] = Form.useForm();

  const [itemData, setItemData] = useState({
    itemcode: '',
    imagelink: '',
    itemname: '',
    description: '',
    details: '',
    price: '',
    status: ''
  });


  const handleChange = (name, value) => {
    setItemData({
      ...itemData,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://decorator-backend.onrender.com/api/decorator/add', itemData);
      message.success('Product added successfully');
      setItemData({
        itemcode: '',
        imagelink: '',
        itemname: '',
        description: '',
        details: '',
        price: '',
        status: ''
      });
      
    } catch (error) {
      console.error('Error adding product:', error.message);
      message.error('Failed to add product');
    }
  };

  return (
    <div>
      <AdminHeader />
      <Card title="Add Product" style={{ width: 600, margin: 'auto', marginTop: 50 }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="itemcode">Item Code:</label>
            <Input id="itemcode" value={itemData.itemcode} onChange={(e) => handleChange('itemcode', e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="imagelink">Image Link:</label>
            <Input id="imagelink" value={itemData.imagelink} onChange={(e) => handleChange('imagelink', e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="itemname">Item Name:</label>
            <Input id="itemname" value={itemData.itemname} onChange={(e) => handleChange('itemname', e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="description">Description:</label>
            <Input.TextArea id="description" value={itemData.description} onChange={(e) => handleChange('description', e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="details">Details:</label>
            <Input.TextArea id="details" value={itemData.details} onChange={(e) => handleChange('details', e.target.value)} />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label htmlFor="price">Price:</label>
            <Input id="price" value={itemData.price} onChange={(e) => handleChange('price', e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="status">Status:</label>
            <Select id="status" value={itemData.status} onChange={(value) => handleChange('status', value)}>
              <Option value="In Stock">In Stock</Option>
              <Option value="Out of Stock">Out of Stock</Option>
            </Select>
            {console.log(itemData)}
          </div>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddProduct;
