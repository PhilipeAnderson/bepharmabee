import React from 'react';
import { HighLightCard } from '../../components/HighLightCard';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  Cards
 } from './styles';

export function Dashboard(){
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/18056309?v=4' }}/>
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Philipe</UserName>
            </User>
          </UserInfo>
          <Icon name="power"/>
        </UserWrapper>
      </Header>
      <Cards>
        <HighLightCard />
        <HighLightCard />
        <HighLightCard />
        <HighLightCard />
        <HighLightCard />
      </Cards>


    </Container>
  )
}

