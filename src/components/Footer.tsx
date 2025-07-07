import React from 'react';
import { Typography, Space, Row, Col, Divider } from 'antd';
import { siteData } from '../data/siteData';

const { Text } = Typography;

const Footer: React.FC = () => {
  const { footer } = siteData;

  return (
    <footer className='py-6 px-4 md:px-6 border-t' style={{ backgroundColor: '#8BA8CB' }}>
      <Row justify='space-between' align='middle'>
        <Col xs={24} sm={12}>
          <Text type='secondary' className='text-xs' style={{ color: '#2D3559' }}>
            {footer.copyright}
          </Text>
        </Col>
        <Col xs={24} sm={12} className='text-right'>
          <Space>
            {footer.links.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  href={link.href}
                  className='text-xs'
                  style={{ color: '#2D3559' }}
                >
                  {link.text}
                </a>
                {index < footer.links.length - 1 && <Divider type='vertical' />}
              </React.Fragment>
            ))}
          </Space>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
