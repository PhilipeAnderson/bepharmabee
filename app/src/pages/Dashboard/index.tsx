import React from 'react';

import { Header } from '../../components/Header';
import { Cards } from '../../components/Cards';
import { Search } from '../../components/Search';
import { Main } from '../../components/Main'

import { 
  Container
 } from './styles';

export function Dashboard(){
  return (
    <Container>
      <Header />
      <Cards />
      <Search />
      <Main />
    </Container>
  )
}

