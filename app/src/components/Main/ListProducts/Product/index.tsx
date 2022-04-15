import React from 'react';

import { 
  Container,
  MedicineImage,
  MedicineInfo,
  NameDrug,
  DescriptionDrug,
  PharmacyName,
  MedicineValue,
  Span,
  Price,
  Cents
} from './styles';

interface MedicineProps{
  image: string,
  name: string,
  description: string,
  pharmacy: string,
  price: string,
  cents: string,
}

export function Product({ 
  image, 
  name,
  description,
  pharmacy,
  price,
  cents
}: MedicineProps) {
  return (
    <Container>
      <MedicineImage 
        source={{ uri: image }}
      />
      <MedicineInfo>
        <NameDrug>{ name }</NameDrug>
        <DescriptionDrug>{ description }</DescriptionDrug>
        <PharmacyName>{ pharmacy }</PharmacyName>
      </MedicineInfo>
      <MedicineValue>
        <Price><Span>R$:</Span>{ price }</Price>
        <Cents>,{ cents}</Cents>
      </MedicineValue>
    </Container>
  )
}