import React from 'react';
import { Alert } from 'react-native';

import AppleSvg from '../../assets/icon-apple.svg';
import GoogleSvg from '../../assets/icon-google.svg';

import { useAuth } from '../../hooks/auth';

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

  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle(){
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível a conectar a conta Google')
    }
  };

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
            //onPress={Home}
            onPress={handleSignInWithGoogle}
          />
          <SignInSocialButton 
            title="Entrar com a Apple"
            svg={AppleSvg}
            //onPress={Home}
            //onPress={handleSignInWithApple}
          />
        </FooterWrapper>
        <CopyRight>
          *Todos os direitos reservados: BePharmaBee*
        </CopyRight>
      </Footer>
    </Container>
  )
};