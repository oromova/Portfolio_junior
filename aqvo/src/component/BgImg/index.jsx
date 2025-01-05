import React from 'react';
import homeImg from '../../assets/homeBack.jpg';
import { Container } from './style';


export const BgImg = () => {
  return (
    <Container>
      <img className='homeImg' src={homeImg} alt='homeimg' />
    </Container>
  );
};
