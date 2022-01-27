import React from 'react';
import { Send } from '@material-ui/icons';
import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from './newsletter.styles';

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get timely updates from your favourite products.
      </Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
