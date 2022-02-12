import React from 'react';
import { 
  Container, 
  Header,
  Title,
  Icon
} from './styles';

export function HighLightCard(){
  return(
    <Container>
      <Header>
        <Title>Panvel</Title>
        <Icon name="motorcycle" />
      </Header>
    </Container>
  )
}