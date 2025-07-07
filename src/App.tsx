'use client';

import type React from 'react';
import { ConfigProvider } from 'antd';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Products from './components/Products';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Event handlers - you can replace these with actual API calls later
  const handleShopClick = () => {
    console.log('Shop clicked - redirect to shop page');
  };

  const handleLearnClick = () => {
    console.log('Learn more clicked - scroll to about section');
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProductClick = (productId: number) => {
    console.log('Product clicked:', productId);
    // Navigate to product detail page
  };

  const handleSubscribeClick = () => {
    console.log('Subscribe clicked - open newsletter signup');
  };

  const handleContactSubmit = (values: any) => {
    console.log('Contact form submitted:', values);
    // Send to API
  };

  const handleNavigation = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2D3559',
          colorSuccess: '#8BA8CB',
          borderRadius: 8,
        },
        components: {
          Button: {
            borderRadius: 8,
          },
          Card: {
            borderRadius: 12,
          },
          Input: {
            borderRadius: 8,
          },
        },
      }}
    >
      <div className='min-h-screen'>
        <Header onNavigate={handleNavigation} />
        <main>
          <Hero onShopClick={handleShopClick} onLearnClick={handleLearnClick} />
          <About />
          <Features />
          <Products onProductClick={handleProductClick} />
          <CTA
            onShopClick={handleShopClick}
            onSubscribeClick={handleSubscribeClick}
          />
          <Contact onSubmit={handleContactSubmit} />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
};

export default App;
