import React from 'react';

import {
  Container,
  Logo,
  Content,
  Title,
  Register,
  InputEmail,
  InputPass,
  SignIn
} from './styles';

export function Login() {
  return (
    <Container>
      <Logo source={require('../../assets/beeLogo.png')} />
      <Content>
        <Title>Login</Title>
        <Register>
          <InputEmail />
          <InputPass />
          <SignIn />
        </Register>
      </Content>
    </Container>
  )
};