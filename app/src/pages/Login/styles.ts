import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: ${RFValue(110)}px;
  height: ${RFValue(130)}px;
`;

export const Content = styled.View`
  margin-top: ${RFValue(20)}px;
  justify-content: center;
  align-items: center;
  
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Register = styled.View`
  width: ${RFPercentage(100)}px;
  
  
  `;

export const InputEmail = styled.TextInput`
  
`;

export const InputPass = styled.TextInput`

`;

export const SignIn = styled.TouchableOpacity`
  border: 1px solid #fff;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.error};
`;
