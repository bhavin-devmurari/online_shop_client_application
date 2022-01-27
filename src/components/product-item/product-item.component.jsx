import React from 'react';
import { Link } from 'react-router-dom';

import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import { Info, Container, Circle, Image, Icon } from './product-item.styles';

const ProductItem = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;
