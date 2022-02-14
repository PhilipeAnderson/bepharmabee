import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

//import AppleSvg from '../../assets/icon-apple.svg';
//import GoogleSvg from '../../assets/icon-google.svg';

import {
  Container,
  Logo,
  Header,
  TitleWrapper,
  Title,
  Span,
  SignInTitle,
  Footer
} from './styles';

export function Login() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Logo source={require('../../assets/beeLogo.png')}/>
          <Title>
            A Farmácia{'\n'}
            DENTRO do seu{'\n'}
            <Span>Condomínio :)</Span> 

          </Title>
        </TitleWrapper>

        <SignInTitle>
          Login
        </SignInTitle>
      </Header>

      <Footer>

      </Footer>
    </Container>
  )
};