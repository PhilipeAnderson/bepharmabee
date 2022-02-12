import React from 'react';

import { 
  Container, 
  Content,
  MedicineImage,
  MedicineInfo,
  NameDrug,
  DescriptionDrug,
  MedicineValue,
  Value,
  Cents,
  Icon,
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
        </MedicineInfo>
        <MedicineValue>
          <Value>89</Value>
          <Cents>,99</Cents>
        </MedicineValue>
      </Content>
    </Container>
  )
}