'use client';

import type React from 'react';
import {Typography, Space} from 'antd';
import { siteData } from '../data/siteData';

const { Text } = Typography;

interface HeaderProps {
  onNavigate?: (href: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const handleNavClick = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    } else {
      // Default scroll behavior
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='sticky top-0 z-50 border-b px-4 lg:px-6 h-16 flex items-center' style={{ background: '#fff', backdropFilter: 'blur(8px)' }}>
      <div className='flex items-center cursor-pointer'>
        <img src={'../public/logo.png'} alt={'Jeanious'} className='h-10 w-15 ' />
        <Text className='ml-2 text-xl font-bold' style={{ color: '#8BA8CB' }}>
          {siteData.brand.name}
        </Text>
      </div>
      <nav className='ml-auto'>
        <Space size='large'>
          {siteData.navigation.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.href)}
              className='text-sm font-medium transition-colors bg-transparent border-none cursor-pointer'
              style={{ color: '#2D3559', background: 'transparent' }}
            >
              <span style={{ color: '#2D3559' }}>{item.text}</span>
            </button>
          ))}
        </Space>
      </nav>
    </header>
  );
};

export default Header;
