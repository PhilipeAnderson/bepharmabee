import React from 'react';
import {
  Container,
  LogoSplash,
  TitleSplash
} from './styles';

export function Splash() {
  return(
    <Container>
      <LogoSplash source={require('../../assets/beeLogo.png')} />
      <TitleSplash>
        BePharmaBee
      </TitleSplash>
    </Container>
  )
}