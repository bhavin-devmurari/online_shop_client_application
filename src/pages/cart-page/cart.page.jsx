import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { Add, Remove } from '@material-ui/icons';

import Announcement from '../../components/announcement/announcement.component';
import Footer from '../../components/footer/footer.component';
import Navbar from '../../components/navbar/navbar.component';

import {
  Container,
  Wrapper,
  Title,
  TopBotton,
  Top,
  Bottom,
  TopTexts,
  TopText,
  ProductInfo,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
} from './cart.styles';
import { userRequest } from '../../requestMethods';
import { useHistory } from 'react-router';

// const KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
// const KEY =
//   'pk_test_51JmwAOSDYGWgBkHAuZMoqjvUFfcCJq0vgRzr7Ub3TsP8BQIV2xDuRv2tgEJu18Ts2ZuD65loZKbBWYoS9yJ1e75T00Vd6ocWMt';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();

  const [stripeToken, setStripeToken] = useState(null);

  const publishableKey =
    'pk_test_51JmwAOSDYGWgBkHAuZMoqjvUFfcCJq0vgRzr7Ub3TsP8BQIV2xDuRv2tgEJu18Ts2ZuD65loZKbBWYoS9yJ1e75T00Vd6ocWMt';

  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('checkout/payment', {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push('/success', {
          stripeData: res.data,
          products: cart,
        });
      } catch (err) {}
    };
    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, cart.total, history]);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopBotton>CONTINUE SHOPPING</TopBotton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopBotton type="filled">CHECKOUT NOW</TopBotton>
        </Top>
        <Bottom>
          <ProductInfo>
            {cart.products.map((product, index) => (
              <Product key={`${index}`}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}

            <Hr />

            {/* <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIES THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 95616813216156{' '}
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5{' '}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product> */}
          </ProductInfo>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              label="Pay Now"
              name="Cloth Factory"
              image="https://svgshare.com/i/CUz.svg"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              panelLabel="Pay Now"
              token={onToken}
              stripeKey={publishableKey}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default CartPage;
