import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import {
  Container,
  Wrapper,
  Left,
  Language,
  SeachContainer,
  Input,
  Center,
  Logo,
  Right,
  MenuItem,
} from './navbar.styles';

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SeachContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SeachContainer>
        </Left>
        <Center>
          <Logo>Cloth Factory.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
