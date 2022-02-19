import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  margin-top: 5px;
  height: ${RFValue(90)}px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;

  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const MedicineImage = styled.Image`
  margin-top: 14px;
  width: 50px;
  height: 70px;
  `;

export const MedicineInfo = styled.TouchableOpacity`
  width: 40%;
  margin-top: 3px;
`;

export const NameDrug = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
`;

export const DescriptionDrug = styled.Text`
  font-size: ${RFValue(12)}px;
`;

export const PharmacyName = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;

export const MedicineValue = styled.Text`
  width: 33%;
  margin-top: 20px;
`;

export const Span = styled.Text`
  font-size: ${RFValue(14)}px;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(30)}px;
`;

export const Cents = styled.Text`
  font-size: ${RFValue(14)}px;
`;
