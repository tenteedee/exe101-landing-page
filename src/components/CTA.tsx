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
    <section className='py-12 md:py-24 lg:py-32 bg-emerald-600'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center'>
          <Space direction='vertical' size='large' className='w-full'>
            <Title level={2} className='!text-white !text-3xl sm:!text-5xl'>
              {cta.title}
            </Title>
            <Paragraph className='!text-emerald-100 !text-lg max-w-2xl mx-auto'>
              {cta.description}
            </Paragraph>
            <Space wrap>
              <Button
                size='large'
                className='bg-white text-emerald-600 hover:!bg-gray-100 border-white'
                onClick={onShopClick}
              >
                {cta.primaryCTA}
              </Button>
              <Button
                size='large'
                ghost
                className='border-white text-white hover:!bg-white hover:!text-emerald-600'
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
