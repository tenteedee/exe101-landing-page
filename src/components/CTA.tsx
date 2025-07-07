'use client';

import type React from 'react';
import { Button, Typography, Space } from 'antd';
import { siteData } from '../data/siteData';

const { Title, Paragraph } = Typography;

interface CTAProps {
  onShopClick?: () => void;
  onSubscribeClick?: () => void;
}

const CTA: React.FC<CTAProps> = ({ onShopClick, onSubscribeClick }) => {
  const { cta } = siteData;

  return (
    <section className='py-12 md:py-24 lg:py-32' style={{ backgroundColor: '#2D3559' }}>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center'>
          <Space direction='vertical' size='large' className='w-full'>
            <Title level={2} className='!text-white !text-3xl sm:!text-5xl'>
              {cta.title}
            </Title>
            <Paragraph style={{ color: '#8BA8CB' }} className='!text-lg max-w-2xl mx-auto'>
              {cta.description}
            </Paragraph>
            <Space wrap>
              <Button
                size='large'
                style={{ backgroundColor: '#fff', color: '#2D3559', borderColor: '#fff' }}
                onClick={onShopClick}
              >
                {cta.primaryCTA}
              </Button>
              <Button
                size='large'
                ghost
                style={{ borderColor: '#fff', color: '#fff' }}
                onClick={onSubscribeClick}
              >
                {cta.secondaryCTA}
              </Button>
            </Space>
          </Space>
        </div>
      </div>
    </section>
  );
};

export default CTA;
