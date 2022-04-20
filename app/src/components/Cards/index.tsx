import React from 'react';
import { HighLightCard } from './HighLightCard';

import {
  Container
} from './styles';


export function Cards() {

  return(
    
    <Container>
      <HighLightCard
          title="Panvel" 
          type="ok"
          image="https://media.moneytimes.com.br/uploads/2020/09/panvel-farmacias-loja-casemiro-baixa-min.jpg"
          />
        <HighLightCard
          title="Pague Menos" 
          type="ok"
          image="https://ictq.com.br/images/gestao-da-pague-menos-reformula-toda-area-de-ti.jpg"
          />
        <HighLightCard
          title="Nissei"
          type="nok"
          image="https://newtrade.com.br/wp-content/uploads/2018/10/farmacia-nissei-25-10-2018-750x430.jpg"
        />
        <HighLightCard
          title="DrogaRaia"
          type="ok"
          image="https://guiadafarmacia.com.br/wp-content/uploads/2019/09/Droga-Raia-Externa-1-Cre%CC%81dito-Divulgac%CC%A7a%CC%83o.png"
        />
        <HighLightCard
          title="Drogamed"
          type="nok"
          image="http://www.costaricanews.com.br/wp-content/uploads/2017/09/CAPA.jpg"
        />
    </Container>
  )
};