import React from 'react';

import { 
  Container, 
  Header,
  Title,
  Icon
} from './styles';

interface CardsProps {
  title: String,
  image?: String,
  type: 'ok' | 'nok'
}

const icon = {
  ok: 'motorcycle',
  nok: 'motorcycle'
}

export function HighLightCard({ title, type, image } : CardsProps){
  return(
    <Container>
        <Header>
          <Title>{title}</Title>
          <Icon name={icon[type]} type={type} />
        </Header>
    </Container>
  )
}