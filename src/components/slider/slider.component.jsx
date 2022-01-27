import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { sliderItems } from '../../data';
import {
  Container,
  Arrow,
  Wrapper,
  SlideContainer,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  Button,
} from './slider.styles';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <SlideContainer bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
              {/* <Image
              src={`https://source.unsplash.com/random/300x200?sig=${Math.random()}`}
            /> */}
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </SlideContainer>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
