import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const LogoSplash = styled.Image`
  width: 225px;
  height: 260px;
  margin-bottom: 20px;
`;

export const TitleSplash = styled.Text`
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.primary}
`;