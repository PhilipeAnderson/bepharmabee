import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { Fontisto } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const SelfHeader = styled.View`
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: flex-start;
`;

export const ImageProduct = styled.Image`
  width: ${RFPercentage(55)}px;
  height: ${RFValue(250)}px;
  margin-top: ${RFValue(10)}px;
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
  font-size: ${RFPercentage(2)}px;
`;

export const ValueProduct = styled.Text`
  font-size: ${RFValue(36)}px;
  font-weight: bold;
  margin-top: ${RFValue(10)}px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

//Footer Cart
export const Footer = styled.View`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const ValueCart = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconCart = styled(Fontisto)`
  font-size: ${RFValue(60)}px;
  margin-right: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const CartGet = styled.View`
  margin-top: ${RFValue(10)}px; 
`;

export const AddCart = styled.View`
  width: 100%;
  height: 30px;
  padding: 0 10px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ButtonMinus = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  margin-top: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const TextButtonMinus = styled.Text`
  font-size: ${RFValue(20)}px;
`;

export const Quantity = styled.Text`
  width: 30%;
  margin-top: 10px;
  text-align: center;
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const ButtonPlus = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  margin-top: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const TextButtonPlus = styled.Text`
  font-size: ${RFValue(20)}px;
`;

export const PurchaseValue = styled.Text`
  width: 100%;
  padding: 0 10px;
  font-size: ${RFPercentage(5)}px;
  font-weight: bold;
  margin-top: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const ConfirmCartOrBuy = styled.View`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const CancelCart = styled.TouchableOpacity`
  width: 50%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.error};
`;

export const TitleCancelCart = styled.Text`
  text-align: center;
  font-weight: bold;
  padding: 2px 2px;
  font-size:${RFValue(20)}px;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const ConfirmBuy = styled.TouchableOpacity`
  width: 50%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.success};
`;

export const TitleConfirmBuy = styled.Text`
  text-align: center;
  font-weight: bold;
  padding: 2px 2px;
  font-size:${RFValue(20)}px;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.shape};
`;
