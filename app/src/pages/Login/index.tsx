import React, { useState} from 'react';
import { Text } from 'react-native';
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

  const [log, setLog] = useState({
    email: '',
    pass: ''
  })

  return (
    <Container>
      <Logo source={require('../../assets/beeLogo.png')} />
      <Content>
        <Title>Login</Title>
        <Register>
          <InputEmail 
            
                     
          />
          <InputPass />
          <SignIn>
            <Text>Entrar</Text>
          </SignIn>
        </Register>
      </Content>
    </Container>
  )
};