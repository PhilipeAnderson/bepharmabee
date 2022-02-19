import React from 'react';

import { Header } from '../../components/Header';
import { Cards } from '../../components/Cards';
import { Search } from '../../components/Search';
import { BestSellers } from '../../components/BestSellers';

import { 
  Container,
  Content,
  TitleBestSellers,
  Adjust
 } from './styles';

export function Dashboard(){
  return (
    <Container>
      <Header />
      <Cards />
      <Search />
      <Content>
        <TitleBestSellers>Mais Vendidos</TitleBestSellers>
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
      </Content>
      <Adjust/>
    </Container>
  )
}

