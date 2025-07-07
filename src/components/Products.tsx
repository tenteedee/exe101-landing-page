'use client';

import type React from 'react';
import { Card, Typography, Row, Col, Button } from 'antd';
import { siteData } from '../data/siteData';

const { Title, Paragraph, Text } = Typography;

interface ProductsProps {
  onProductClick?: (productId: number) => void;
}

const Products: React.FC<ProductsProps> = ({ onProductClick }) => {
  const { products } = siteData;

  return (
    <section id='products' className='py-12 md:py-24 lg:py-32'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center mb-12'>
          <Title level={2} className='!text-3xl sm:!text-5xl'>
            {products.title}
          </Title>
          <Paragraph className='!text-gray-600 !text-lg max-w-4xl mx-auto'>
            {products.description}
          </Paragraph>
        </div>
        <Row gutter={[24, 24]} justify='center'>
          {products.items.map((product) => (
            <Col xs={24} md={8} key={product.id}>
              <Card
                hoverable
                cover={
                  <img
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    className='w-full h-84 object-cover'
                  />
                }
                actions={[
                  <Button
                    key='view'
                    type='text'
                    style={{ color: '#2D3559' }}
                    onClick={() => onProductClick?.(product.id)}
                  >
                    View Details
                  </Button>,
                ]}
              >
                <Card.Meta
                  title={product.name}
                  description={product.description}
                />
                <div className='flex justify-between items-center mt-4'>
                  <Text strong className='text-xl'>
                    {product.price} VND
                  </Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Products;
