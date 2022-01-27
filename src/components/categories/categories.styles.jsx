import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  ${mobile({
    marginTop: '30px',
    padding: '0px',
    flexDirection: 'column',
  })}
`;
