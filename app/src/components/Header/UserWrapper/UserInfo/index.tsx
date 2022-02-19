import React from 'react';

import {
  Container,
  UserPhoto,
  UserData,
  UserGreeting,
  UserName
} from './styles';

export function UserInfo() {
  return(
    <Container>
      <UserPhoto source={{ uri: 'https://avatars.githubusercontent.com/u/18056309?v=4'}} />
      <UserData>
        <UserGreeting>Olá, </UserGreeting>
        <UserName>Philipe</UserName>
      </UserData>
    </Container>
  )
};