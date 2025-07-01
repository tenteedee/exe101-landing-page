import type React from 'react';
import { Card, Typography, Space, Row, Col, Avatar } from 'antd';
import { Recycle, Heart, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

const { Title, Paragraph, Text } = Typography;

const Features: React.FC = () => {
  const { features } = siteData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'recycle':
        return <Recycle className='h-8 w-8 text-emerald-600' />;
      case 'heart':
        return <Heart className='h-8 w-8 text-blue-600' />;
      case 'shield':
        return <ShieldCheck className='h-8 w-8 text-purple-600' />;
      default:
        return <Recycle className='h-8 w-8 text-emerald-600' />;
    }
  };

  const getBackgroundColor = (color: string) => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-100';
      case 'blue':
        return 'bg-blue-100';
      case 'purple':
        return 'bg-purple-100';
      default:
        return 'bg-emerald-100';
    }
  };

  return (
    <section className='py-12 md:py-24 lg:py-32 bg-gray-50'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center mb-12'>
          <Title level={2} className='!text-3xl sm:!text-5xl'>
            {features.title}
          </Title>
          <Paragraph className='!text-gray-600 !text-lg max-w-4xl mx-auto'>
            {features.description}
          </Paragraph>
        </div>
        <Row gutter={[24, 24]} justify='center'>
          {features.items.map((item, index) => (
            <Col xs={24} md={8} key={index}>
              <Card className='text-center h-full shadow-lg border-0'>
                <Space direction='vertical' size='large' className='w-full'>
                  <Avatar
                    size={64}
                    className={`${getBackgroundColor(item.color)} mx-auto`}
                    icon={getIcon(item.icon)}
                  />
                  <Title level={3}>{item.title}</Title>
                  <Text type='secondary'>{item.description}</Text>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Features;
