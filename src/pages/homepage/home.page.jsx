import React from 'react';

import Announcement from '../../components/announcement/announcement.component';
import Categories from '../../components/categories/categories.component';
import Navbar from '../../components/navbar/navbar.component';
import Products from '../../components/products/products.component';
import Slider from '../../components/slider/slider.component';
import NewsLetter from '../../components/newsletter/newsletter.component';

import './home.page.styles.scss';
import Footer from '../../components/footer/footer.component';

const HomePage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};
export default HomePage;
