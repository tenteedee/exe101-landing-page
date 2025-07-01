import type React from 'react';
import { Card, Form, Input, Typography, Space, Row, Col, Button } from 'antd';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

interface ContactProps {
  onSubmit?: (values: any) => void;
}

const Contact: React.FC<ContactProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const { contact } = siteData;

  const handleFinish = (values: any) => {
    if (onSubmit) {
      onSubmit(values);
    } else {
      console.log('Form submitted:', values);
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'mail':
        return <Mail className='h-5 w-5 text-emerald-600' />;
      case 'phone':
        return <Phone className='h-5 w-5 text-emerald-600' />;
      case 'map':
        return <MapPin className='h-5 w-5 text-emerald-600' />;
      default:
        return <Mail className='h-5 w-5 text-emerald-600' />;
    }
  };

  return (
    <section id='contact' className='py-12 md:py-24 lg:py-32'>
      <div className='container mx-auto px-4 md:px-6'>
        <Row gutter={[48, 24]}>
          <Col xs={24} lg={12}>
            <Space direction='vertical' size='large' className='w-full'>
              <Title level={2} className='!text-3xl sm:!text-4xl'>
                {contact.title}
              </Title>
              <Paragraph className='!text-gray-600 !text-lg'>
                {contact.description}
              </Paragraph>
              <Space direction='vertical' size='middle'>
                {contact.info.map((item, index) => (
                  <Space key={index}>
                    {getIcon(item.icon)}
                    <Text>{item.text}</Text>
                  </Space>
                ))}
              </Space>
            </Space>
          </Col>
          <Col xs={24} lg={12}>
            <Card>
              <Form
                form={form}
                layout='vertical'
                onFinish={handleFinish}
                size='large'
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label='First Name'
                      name='firstName'
                      rules={[
                        {
                          required: true,
                          message: 'Please enter your first name',
                        },
                      ]}
                    >
                      <Input placeholder='Enter your first name' />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label='Last Name'
                      name='lastName'
                      rules={[
                        {
                          required: true,
                          message: 'Please enter your last name',
                        },
                      ]}
                    >
                      <Input placeholder='Enter your last name' />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  label='Email'
                  name='email'
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' },
                  ]}
                >
                  <Input placeholder='Enter your email' />
                </Form.Item>
                <Form.Item
                  label='Message'
                  name='message'
                  rules={[
                    { required: true, message: 'Please enter your message' },
                  ]}
                >
                  <TextArea
                    rows={4}
                    placeholder='Tell us about your interest in our products...'
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type='primary'
                    htmlType='submit'
                    block
                    className='bg-emerald-600 hover:!bg-emerald-700 border-emerald-600'
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
