import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  background-color: ${({ theme}) => theme.colors.primary};

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px; 
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;

`;


export const Photo = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: 50px;
`;


export const User = styled.View`
  margin-left: 12px;
`;


export const UserGreeting = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.textDark}
`;


export const UserName = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textDark}
`;

