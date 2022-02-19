import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserPhoto = styled.Image`
  border-radius: 50px;
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
`;

export const UserData = styled.Text`
  margin-left: 12px;
`;

export const UserGreeting = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const UserName = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.textDark};
`;


