import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { Add, Remove } from '@material-ui/icons';

import { addProduct } from '../../redux/cartRedux';

import Navbar from '../../components/navbar/navbar.component';
import Announcement from '../../components/announcement/announcement.component';
import NewsLetter from '../../components/newsletter/newsletter.component';
import Footer from '../../components/footer/footer.component';

import {
  Container,
  Wrapper,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  ProductDescription,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from './product-description.styles';
import { publicRequest } from '../../requestMethods';

const ProductDescriptionPage = () => {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + productId);
        console.log(res.data.product);
        setProduct(res.data.product);
      } catch (err) {}
    };
    getProduct();
  }, [productId]);

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCartClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <ImageContainer>
          {/* <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" /> */}
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <ProductDescription>{product.desc}</ProductDescription>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              {/* {product.color &&
                product.color.map((c, index) => {
                  OOOOORRRRR */}
              {product.color?.map((c, index) => {
                return (
                  <FilterColor
                    key={`${product._id}_${index}_${c}`}
                    color={c}
                    onClick={() => setColor(c)}
                  />
                );
              })}
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {/* {product.size &&
                  product.size.map((size, index) => {
                    OOOOOOOOORRRRRRRRRR */}
                {product.size?.map((size, index) => {
                  return (
                    <FilterSizeOption key={`${product._id}_${index}_${size}`}>
                      {size}
                    </FilterSizeOption>
                  );
                })}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('dec')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </AmountContainer>
            <Button onClick={handleAddToCartClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductDescriptionPage;
