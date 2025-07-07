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
    <section className='py-12 md:py-24 lg:py-32' style={{ background: 'linear-gradient(135deg, #8BA8CB 0%, #2D3559 100%)' }}>
      <div className='container mx-auto px-4 md:px-6'>
        <Row gutter={[48, 24]} align='middle'>
          <Col xs={24} lg={14}>
            <Space direction='vertical' size='large' className='w-full'>
              <Badge
                count={hero.badge}
                style={{
                  backgroundColor: '#8BA8CB',
                  color: '#2D3559',
                  border: 'none',
                }}
              />
              <Title
                level={1}
                className='!mb-0 !text-3xl sm:!text-5xl xl:!text-6xl'
              >
                {hero.title}
                <span style={{ color: '#2D3559' }}> {hero.titleHighlight}</span>
              </Title>
              <Paragraph className='!text-gray-600 !text-lg md:!text-xl max-w-2xl'>
                {hero.description}
              </Paragraph>
              <Space wrap>
                <Button
                  type='primary'
                  size='large'
                  style={{ backgroundColor: '#2D3559', borderColor: '#2D3559', color: '#fff' }}
                  onClick={onShopClick}
                >
                  {hero.primaryCTA}
                </Button>
                <Button size='large' ghost style={{ color: '#2D3559', borderColor: '#2D3559' }} onClick={onLearnClick}>
                  {hero.secondaryCTA}
                </Button>
              </Space>
              <Space size='large'>
                {hero.features.map((feature, index) => (
                  <Space key={index}>
                    {feature.icon === 'heart' && (
                      <Heart className='h-4 w-4' style={{ color: '#8BA8CB' }} />
                    )}
                    {feature.icon === 'recycle' && (
                      <Recycle className='h-4 w-4' style={{ color: '#2D3559' }} />
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
