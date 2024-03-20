import React, { useState } from 'react';
import { Card, Select } from 'antd';

const { Option } = Select;

const ProductCard = ({ item }) => {
  // const [selectedPriceKey, setSelectedPriceKey] = useState(`3 Months - Rs. ${item.three_month_price}`);

  // // const handlePriceChange = (value) => {
  // //   setSelectedPriceKey(value);
  // // };



  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      cover={<img alt="product" src={item.imagelink} />}
    >
      <Card.Meta
        title={<strong>{item.itemname}</strong>}
        description={item.description}
      />
      <div style={{ marginTop: 16 }}>
        <strong>Price:</strong> Rs. {item.price}
      </div>
      <div style={{ marginTop: 16 }}>
        <strong>Description: </strong> {item.description}
      </div>
      <div style={{ marginTop: 16 }}>
        <strong>Status: </strong> {item.status}
      </div>
    </Card>
  );
};

export default ProductCard;
