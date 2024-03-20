import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Modal, Button } from 'antd';
import ProductCard from '../components/ProductCard';
import '../pages/Products.css'

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [showDisclaimer, setShowDisclaimer] = useState(false); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/decorator/all'); 
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDisclaimerClick = () => {
    setShowDisclaimer(true); 
  };

  console.log("product list:", products);

  return (
    <div>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Product Catalogue</h1>
        <Button className="disclaimer-button" onClick={handleDisclaimerClick}>I Agree (Disclaimer)</Button>
      </header>
      <Row gutter={[16, 16]}>
        {products.map((product, index) => (
          <Col span={8} key={index}>
            <ProductCard item={product} />
          </Col>
        ))}
      </Row>
      <Modal
        title="Disclaimer"
        visible={showDisclaimer}
        onCancel={() => setShowDisclaimer(false)} // Hide the disclaimer popup when canceled
        footer={[
          <Button key="agree" type="primary" onClick={() => setShowDisclaimer(false)}>Agree</Button>
        ]}
      >
        <div>
            <h4 style={{ textAlign: 'center' }}> Company's Terms And Conditions</h4>
            <ol>
              <li>Once the Token amount of 50% is received, we will start the process. The Token Amount is non-refundable.</li>
              <li>After making the payment, kindly send the Transaction Id to our Office WhatsApp Number: +91 9330831395</li>
              <li>The Deposit amount, carrying and labor charges, agreement charges, and other payments will be accepted only in Cash/PhonePe/GooglePay</li>
              <li>Only transfer Rent In our Bank Account Only Then we sent GST bill otherwise we do not sent gst bill</li>
              <li>If the order is cancelled on a particular date, there will be a deduction to the tune of 30% of the total order value and the rest shall be refunded in the next Seven working days.</li>
              <li>In case of returning the devices, the deposit will be refunded within 7 working days.</li>
            </ol>
          </div>

      </Modal>

    </div>
  );
};

export default ProductPage;
