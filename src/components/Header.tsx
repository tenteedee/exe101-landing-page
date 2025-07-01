'use client';

import type React from 'react';
import { Typography, Space } from 'antd';
import { Recycle } from 'lucide-react';
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
    <header className='sticky top-0 z-50 bg-white/95 backdrop-blur border-b px-4 lg:px-6 h-16 flex items-center'>
      <div className='flex items-center cursor-pointer'>
        <Recycle className='h-8 w-8 text-emerald-600' />
        <Text className='ml-2 text-xl font-bold text-gray-900'>
          {siteData.brand.name}
        </Text>
      </div>
      <nav className='ml-auto'>
        <Space size='large'>
          {siteData.navigation.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.href)}
              className='text-sm font-medium hover:text-emerald-600 transition-colors bg-transparent border-none cursor-pointer'
            >
              {item.text}
            </button>
          ))}
        </Space>
      </nav>
    </header>
  );
};

export default Header;
