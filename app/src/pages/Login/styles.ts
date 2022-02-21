import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const Logo = styled.Image`
  width: ${RFValue(110)}px;
  height: ${RFValue(130)}px;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${({ theme}) => theme.colors.backgroundDark};

  justify-content: flex-end;
  align-items: center;
`;

export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 60px;
  text-align: center;
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Span = styled.Text`
  font-size: ${RFValue(40)}px;
`;

export const SignInTitle = styled.Text`
  margin-top:60px;
  text-align: center;
  margin-bottom: 10px;
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Footer = styled.View`
  width: 100%;
  height: 40%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const FooterWrapper = styled.View`
  margin-top: ${RFPercentage(5)}px;
  padding: 0 32px;
  justify-content: space-between;
`;

export const CopyRight = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-top: 35px;
`;



