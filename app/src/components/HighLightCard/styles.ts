import styled from 'styled-components/native';
import { Fontisto } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: ${RFValue(320)}px;
  height: ${RFValue(200)}px;
  margin-right: 16px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 70px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const Header = styled.View`
  margin-top: -180px;
  padding: 0 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
`;

export const Icon = styled(Fontisto)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.error}
`;