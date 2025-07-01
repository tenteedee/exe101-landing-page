'use client';

import type React from 'react';
import { Button, Typography, Space, Row, Col, Badge } from 'antd';
import { Heart, Recycle } from 'lucide-react';
import { siteData } from '../data/siteData';

const { Title, Paragraph, Text } = Typography;

interface HeroProps {
  onShopClick?: () => void;
  onLearnClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopClick, onLearnClick }) => {
  const { hero } = siteData;

  return (
    <section className='py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 to-blue-50'>
      <div className='container mx-auto px-4 md:px-6'>
        <Row gutter={[48, 24]} align='middle'>
          <Col xs={24} lg={14}>
            <Space direction='vertical' size='large' className='w-full'>
              <Badge
                count={hero.badge}
                style={{
                  backgroundColor: '#d1fae5',
                  color: '#065f46',
                  border: 'none',
                }}
              />
              <Title
                level={1}
                className='!mb-0 !text-3xl sm:!text-5xl xl:!text-6xl'
              >
                {hero.title}
                <span className='text-emerald-600'> {hero.titleHighlight}</span>
              </Title>
              <Paragraph className='!text-gray-600 !text-lg md:!text-xl max-w-2xl'>
                {hero.description}
              </Paragraph>
              <Space wrap>
                <Button
                  type='primary'
                  size='large'
                  className='bg-emerald-600 hover:!bg-emerald-700 border-emerald-600'
                  onClick={onShopClick}
                >
                  {hero.primaryCTA}
                </Button>
                <Button size='large' ghost onClick={onLearnClick}>
                  {hero.secondaryCTA}
                </Button>
              </Space>
              <Space size='large'>
                {hero.features.map((feature, index) => (
                  <Space key={index}>
                    {feature.icon === 'heart' && (
                      <Heart className='h-4 w-4 text-red-500' />
                    )}
                    {feature.icon === 'recycle' && (
                      <Recycle className='h-4 w-4 text-emerald-600' />
                    )}
                    <Text type='secondary'>{feature.text}</Text>
                  </Space>
                ))}
              </Space>
            </Space>
          </Col>
          <Col xs={24} lg={10}>
            <div className='flex justify-center'>
              <img
                src={hero.image || '/placeholder.svg'}
                alt='Upcycled denim handbag collection'
                className='rounded-xl shadow-2xl max-w-full h-auto'
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
