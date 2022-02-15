import React, { useState} from  'react';
import { Text } from 'react-native';

import {
  Container,
  Header,
  InfoProduct,
  ImageProduct,
  TitleProduct,
  SubTitleProduct,
  DescriptionProduct,
  ValueProduct,
  Footer,
  ValueCart,
  IconCart,
  CartGet,
  AddCart,
  ButtonMinus,
  TextButtonMinus,
  Quantity,
  ButtonPlus,
  TextButtonPlus,
  PurchaseValue,

} from './styles';

export function Product() {

  const [ quantityAddCart, setQuantityAddCart ] = useState(1)

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
          <ValueProduct>
            R$:19,80
          </ValueProduct>
        </InfoProduct>
      </Header>
      <Footer>
        <ValueCart>
          <CartGet>
            <AddCart>
              <ButtonMinus onPress={() => {
                if(quantityAddCart <= 1){
                  quantityAddCart
                }else{
                  setQuantityAddCart(quantityAddCart - 1)
                }
              }}>
                <TextButtonMinus>
                  - 
                </TextButtonMinus>
              </ButtonMinus>
              <Quantity>
                { quantityAddCart }
              </Quantity>
              <ButtonPlus onPress={() => {
                if(quantityAddCart === 20){
                  setQuantityAddCart(20)
                }else{
                  setQuantityAddCart(quantityAddCart + 1)
                }
              }}>
                <TextButtonPlus> 
                  + 
                </TextButtonPlus>
              </ButtonPlus>
            </AddCart>
            <PurchaseValue>
              R$:19,80
            </PurchaseValue>
          </CartGet>
          <IconCart name="opencart"/>
        </ValueCart>
        {/* <ConfirmCartOrBuy>
          <ConfirmCart></ConfirmCart>
          <ConfirmBuy></ConfirmBuy>
        </ConfirmCartOrBuy> */}
      </Footer>
    </Container>
  )
};