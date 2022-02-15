import React from 'react';

import AppleSvg from '../../assets/icon-apple.svg';
import GoogleSvg from '../../assets/icon-google.svg';

import { SignInSocialButton } from '../../components/SignInSocialButton';

import {
  Container,
  Logo,
  Header,
  TitleWrapper,
  Title,
  Span,
  SignInTitle,
  Footer,
  FooterWrapper,
  CopyRight
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
        <FooterWrapper>
          <SignInSocialButton 
            title="Entrar com o Google"
            svg={GoogleSvg}
          />
          <SignInSocialButton 
            title="Entrar com a Apple"
            svg={AppleSvg}
          />
        </FooterWrapper>
        <CopyRight>
          *Todos os direitos reservados: BePharmaBee*
        </CopyRight>
      </Footer>
    </Container>
)};