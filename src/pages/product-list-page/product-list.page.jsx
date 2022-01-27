import { useState } from 'react';
import { useLocation } from 'react-router';

import Navbar from '../../components/navbar/navbar.component';
import Announcement from '../../components/announcement/announcement.component';
import NewsLetter from '../../components/newsletter/newsletter.component';
import Footer from '../../components/footer/footer.component';
import Products from '../../components/products/products.component';

import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
} from './product-list.styles';

const ProductListPage = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title> {cat} </Title>
      <FilterContainer>
        <Filter>
          <FilterText> Filter Products: </FilterText>
          <Select
            name="color"
            value={filters.color ? filters.color : 'color'}
            onChange={handleFilters}
          >
            <Option value="color" disabled>
              Color
            </Option>
            <Option value="white">white</Option>
            <Option value="black">black</Option>
            <Option value="red">red</Option>
            <Option value="blue">blue</Option>
            <Option value="yellow">yellow</Option>
            <Option value="green">green</Option>
          </Select>
          <Select
            name="size"
            value={filters.size ? filters.size : 'size'}
            onChange={handleFilters}
          >
            <Option disabled value="size">
              Size
            </Option>
            <Option value="XS">XS</Option>
            <Option value="S">S</Option>
            <Option value="M">M</Option>
            <Option value="L">L</Option>
            <Option value="XL">XL</Option>
          </Select>
          {/* <Select defaultValue="">
            <Option value="" disabled>
              Color
            </Option>
            <Option value="1">White</Option>
            <Option value="2">Black</Option>
            <Option value="3">Red</Option>
            <Option value="4">Blue</Option>
            <Option value="5">Yellow</Option>
            <Option value="6">Green</Option>
          </Select>
          <Select defaultValue="">
            <Option value="" disabled>
              Size
            </Option>
            <Option value="1">XS</Option>
            <Option value="2">S</Option>
            <Option value="3">M</Option>
            <Option value="4">L</Option>
            <Option value="5">XL</Option>
          </Select> */}
        </Filter>
        <Filter>
          <FilterText> Sort Products: </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="acs">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
        {/* <Filter>
          <FilterText> Sort Products: </FilterText>
          <Select defaultValue="1">
            <Option value="1">Newest</Option>
            <Option value="2">Price (asc)</Option>
            <Option value="3">Price (desc)</Option>
          </Select>
        </Filter> */}
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductListPage;
