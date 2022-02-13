import { Fontisto } from '@expo/vector-icons';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  width: 100%;
  height: ${RFValue(90)}px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  margin-top: 7px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const Content = styled.View`
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
`;

export const MedicineImage = styled.Image`
  margin-top: 14px;
  width: 50px;
  height: 70px;
  `;

export const MedicineInfo = styled.TouchableOpacity`
  width: 40%;
  margin-top: 10px;
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
  width: 30%;
  margin-top: 10px;
`;

export const Value = styled.Text`
  font-weight: bold;
  margin-top: 25px;
  font-size: ${RFValue(40)}px;
`;

export const Cents = styled.Text`
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Fontisto)`
  font-size: ${RFValue(24)}px;
`;
