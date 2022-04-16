import React from 'react';

import {
  Container,
  SelfHeader,
  Title,
  Category,
  CategoryText,
  List,
  TextCallToAction,
  CallToAction
} from './styles';


export function Specials() {
  return (
    <Container>
      <SelfHeader>
        <Title>Escolha Uma Categoria Especial</Title>
        <Category>
          <CategoryText>Auditivo</CategoryText>
          <CategoryText>Visual</CategoryText>
          <CategoryText>Fala</CategoryText>
          <CategoryText>Motor</CategoryText>
        </Category>
      </SelfHeader>
      <List >
        <TextCallToAction>
          Escolha em uma das categorias os produtos que você precisa. Nossos Parceiros irão atendê-lo!
        </TextCallToAction>
        <CallToAction source={require('../../assets/inclusao.jpg')} />
      </List>
    </Container>
  )
};