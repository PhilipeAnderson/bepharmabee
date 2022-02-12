import React from 'react';
import { HighLightCard } from '../../components/HighLightCard';
import { BestSellers } from '../../components/BestSellers';

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
  Cards,
  Search,
  Content,
  TitleBestSellers
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
        <HighLightCard 
          title="Panvel" 
          type="ok"
          //image="https://media.moneytimes.com.br/uploads/2020/09/panvel-farmacias-loja-casemiro-baixa-min.jpg"
          />
        <HighLightCard 
          title="Minerva" 
          type="ok"
          // image="https://imagesapt.apontador-assets.com/fit-in/640x480/722bcf86e7604ab6b57a88e274433997/c407529358614t6143-7281337604709860.jpg"
          />
        <HighLightCard 
          title="Nissei"
          type="nok"
          // image="https://newtrade.com.br/wp-content/uploads/2018/10/farmacia-nissei-25-10-2018-750x430.jpg"
        />
        <HighLightCard 
          title="DrogaRaia"
          type="ok"
          // image="https://newtrade.com.br/wp-content/uploads/2018/10/farmacia-nissei-25-10-2018-750x430.jpg"
        />
        <HighLightCard 
          title="Nippon"
          type="nok"
          // image="https://newtrade.com.br/wp-content/uploads/2018/10/farmacia-nissei-25-10-2018-750x430.jpg"
        />
      </Cards>
      <Search>Mais Vendidos</Search>
      <Content>
        <TitleBestSellers>Mais Vendidos</TitleBestSellers>
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
      </Content>
    </Container>
  )
}

