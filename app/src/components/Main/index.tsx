import React, { ReactNode} from 'react';
import { ListProducts } from './ListProducts';

import {
  Container,
  TitleList
} from './styles';

export function Main() {
  return(
    <Container>
      <TitleList>Mais Vendidos</TitleList>
      <ListProducts />
    </Container>
  )
};