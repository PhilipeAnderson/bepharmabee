import React from 'react';
import { Image } from 'react-native';

import { 
  Container,
  BackImage,
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
      <BackImage source={{uri: 'https://media.moneytimes.com.br/uploads/2020/09/panvel-farmacias-loja-casemiro-baixa-min.jpg'}} />
    </Container>
  )
}