import React from 'react';

import { 
  Container,
  BackImage,
  Header,
  Title,
  Icon
} from './styles';

interface CardsProps {
  title: string,
  image: string,
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
      <BackImage source={{ uri: image }} />
    </Container>
  )
}