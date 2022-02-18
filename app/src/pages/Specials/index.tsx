import React from 'react';

import { 
  Container,
  Header,
  Title,
  Category,
  CategoryText,
  List
} from './styles';


export function Specials() {
  return(
    <Container>
      <Header>
        <Title>Escolha Uma Categoria Especial</Title>
        <Category>
          <CategoryText>Auditivo</CategoryText>
          <CategoryText>Visual</CategoryText>
          <CategoryText>Motor</CategoryText>
        </Category>
      </Header>
      <List />
    </Container>
  )
};