import React from  'react';
import {
  Container,
  Header,
  InfoProduct,
  ImageProduct,
  TitleProduct,
  SubTitleProduct,
  DescriptionProduct,
  ValueProduct,
  Footer
} from './styles';

export function Product() {
  return(
    <Container>
      <Header>
        <ImageProduct source={require('../../assets/product.jpg')}/>
        <InfoProduct>
          <TitleProduct>Cataflam 50mg</TitleProduct>
          <SubTitleProduct>Diclofenaco de Potássico</SubTitleProduct>
          <DescriptionProduct>
          Para que serve? Cataflam é indicado para o 
          tratamento de curto prazo, das seguintes 
          condições: Entorses, distensões e outras 
          lesões; Dor e inflamação no pós-operatório; 
          Condições inflamatórias… 
          Continuar lendo bula
          </DescriptionProduct>
          <ValueProduct>R$:19,80</ValueProduct>
        </InfoProduct>
      </Header>
      <Footer>
        {/* <ValueCart>
          <Cart />
          <CartGet>
            <AddCart />
            <PurchaseValue></PurchaseValue>
          </CartGet>
        </ValueCart>
        <ConfirmCartOrBuy>
          <ConfirmCart></ConfirmCart>
          <ConfirmBuy></ConfirmBuy>
        </ConfirmCartOrBuy> */}
      </Footer>
    </Container>
  )
};