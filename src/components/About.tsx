import type React from 'react';
import { Typography, Space, Row, Col } from 'antd';
import { siteData } from '../data/siteData';

const { Title, Paragraph, Text } = Typography;

const About: React.FC = () => {
  const { about } = siteData;

  return (
    <section id='about' className='py-12 md:py-24 lg:py-32'>
      <div className='container mx-auto px-4 md:px-6'>
        <Row gutter={[48, 24]} align='middle'>
          <Col xs={24} lg={10}>
            <img
              src={about.image || '/placeholder.svg'}
              alt='Artisan working on denim handbag'
              className='w-full rounded-xl'
            />
          </Col>
          <Col xs={24} lg={14}>
            <Space direction='vertical' size='large' className='w-full'>
              <Title level={2} className='!text-3xl sm:!text-5xl' style={{ color: '#2D3559' }}>
                {about.title}
              </Title>
              <Paragraph className='!text-lg' style={{ color: '#8BA8CB' }}>
                {about.description}
              </Paragraph>
              <Row gutter={[24, 16]}>
                {about.features.map((feature, index) => (
                  <Col xs={24} sm={12} key={index}>
                    <Space direction='vertical' size='small'>
                      <Title level={4} style={{ color: '#2D3559' }}>{feature.title}</Title>
                      <Text type='secondary' style={{ color: '#8BA8CB' }}>{feature.description}</Text>
                    </Space>
                  </Col>
                ))}
              </Row>
            </Space>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
