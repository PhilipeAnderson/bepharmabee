import React, { useState, useEffect } from  'react';
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
  ConfirmCartOrBuy,
  CancelCart,
  TitleCancelCart,
  ConfirmBuy,
  TitleConfirmBuy
} from './styles';

const valueProduct = 24.99

export function Product() {

  const [ quantityAddCart, setQuantityAddCart ] = useState(1);
  const [ uniqueValueProduct, setUniqueValueProduct ] = useState(valueProduct)

  useEffect(() => {
    setUniqueValueProduct(quantityAddCart * valueProduct)
  },[quantityAddCart])

  return(
    <Container>
      <Header>
        <ImageProduct source={require('../../assets/product.jpg')}/>
        <InfoProduct>
          <TitleProduct>Cataflam 50mg</TitleProduct>
          <SubTitleProduct>Diclofenaco de Potássico</SubTitleProduct>
          <DescriptionProduct>
          Cataflam é indicado para o 
          tratamento de curto prazo, das seguintes 
          condições: Entorses, distensões e outras 
          lesões; Dor e inflamação no pós-operatório; 
          Condições inflamatórias… 
          Continuar lendo bula
          </DescriptionProduct>
          <ValueProduct>
            R$:{ valueProduct.toFixed(2) }
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
            <PurchaseValue >
              R$:{uniqueValueProduct.toFixed(2)}
            </PurchaseValue>
          </CartGet>
          <IconCart name="opencart"/>
        </ValueCart>
        <ConfirmCartOrBuy>
          <CancelCart>
            <TitleCancelCart>Cancelar</TitleCancelCart>
          </CancelCart>
          <ConfirmBuy>
            <TitleConfirmBuy>Comprar</TitleConfirmBuy>
          </ConfirmBuy>
        </ConfirmCartOrBuy>
        
      </Footer>
    </Container>
  )
};