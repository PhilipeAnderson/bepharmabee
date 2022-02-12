import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  border-top-left-radius: 77px;
  border-bottom-right-radius: 90px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 14px;
  margin-top: ${getStatusBarHeight() + RFValue(18)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.textDark};   
`;

export const Cards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 14 }
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

