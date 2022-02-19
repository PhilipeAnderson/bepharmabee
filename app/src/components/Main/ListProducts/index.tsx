import React from 'react';

import { BestSellers } from './BestSellers';

import {
  Container
} from './styles';

export function ListProducts() {
  return(
    <Container>
      <BestSellers />
      <BestSellers />
      <BestSellers />
      <BestSellers />
    </Container>
  )
};