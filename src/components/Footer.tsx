import React from 'react';
import { Typography, Space, Row, Col, Divider } from 'antd';
import { siteData } from '../data/siteData';

const { Text } = Typography;

const Footer: React.FC = () => {
  const { footer } = siteData;

  return (
    <footer className='py-6 px-4 md:px-6 border-t bg-gray-50'>
      <Row justify='space-between' align='middle'>
        <Col xs={24} sm={12}>
          <Text type='secondary' className='text-xs'>
            {footer.copyright}
          </Text>
        </Col>
        <Col xs={24} sm={12} className='text-right'>
          <Space>
            {footer.links.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  href={link.href}
                  className='text-xs hover:text-emerald-600 text-gray-600'
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
