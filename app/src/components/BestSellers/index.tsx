import React from 'react';
import { View, Text } from 'react-native';

import { 
  Container, 
  Content,
  MedicineImage,
  MedicineInfo,
  NameDrug,
  DescriptionDrug,
  MedicineValue,
  Value
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
          <Value>888</Value>
          <Text>,99</Text>
        </MedicineValue>
      </Content>
    </Container>
  )
}