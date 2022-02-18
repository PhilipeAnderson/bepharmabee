import React from 'react';

import { Routes } from '../../routes/routes';
const routes = Routes();

import { 
  Container, 
  Content,
  MedicineImage,
  MedicineInfo,
  NameDrug,
  DescriptionDrug,
  PharmacyName,
  MedicineValue,
  Value,
  Cents
} from './styles';

export function BestSellers() {
  return (
    <Container>
      <Content>
        <MedicineImage 
          source={require('../../assets/drugListShape.png')}
        />
        <MedicineInfo>
          <NameDrug>Novalgina</NameDrug>
          <DescriptionDrug>Combate a febre e enxaqueca!</DescriptionDrug>
          <PharmacyName>Nissei</PharmacyName>
        </MedicineInfo>
        <MedicineValue>
          <Value>999</Value>
          <Cents>,99</Cents>
        </MedicineValue>
      </Content>
    </Container>
  )
}