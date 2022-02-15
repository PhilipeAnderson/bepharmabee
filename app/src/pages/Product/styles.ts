import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { Fontisto } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.shape};
  `;

export const ImageProduct = styled.Image`
  width: ${RFValue(400)}px;
  height: ${RFValue(250)}px;
  margin-top: ${RFValue(40)}px;
`;

export const InfoProduct = styled.View`
  width: 100%;
  padding: 5px 10px;
`;

export const TitleProduct = styled.Text`
  font-size: ${RFValue(30)}px;
  font-weight: bold;
  margin-top: ${RFValue(-20)}px;
`;

export const SubTitleProduct = styled.Text`
  font-size: ${RFValue(15)}px;
  font-weight: bold;
  margin-bottom: ${RFValue(8)}px;
`;

export const DescriptionProduct = styled.Text`
  font-size: ${RFValue(18)}px;
`;

export const ValueProduct = styled.Text`
  font-size: ${RFValue(40)}px;
  font-weight: bold;
  margin-top: ${RFValue(10)}px;
  margin-left: ${RFValue(200)}px;
`;

//Footer Cart
export const Footer = styled.View`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const ValueCart = styled.View`
  width: 100%;
  padding: 5px 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const IconCart = styled(Fontisto)`
  font-size: ${RFValue(48)}px;
  color: ${({ theme }) => theme.colors.shape};
  margin-top: ${RFValue(10)}px;
  justify-content: flex-start;
`;

export const CartGet = styled.View`
  width: ${RFPercentage(40)}px;
  height: ${RFPercentage(20)}px;
  margin-top: ${RFValue(10)}px; 
  background-color: ${({ theme }) => theme.colors.error};
`;

export const AddCart = styled.View`

`;

export const PurchaseValue = styled.View`

`;


