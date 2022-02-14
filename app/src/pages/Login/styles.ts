import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 110px;
  height: 130px;
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

`;

export const InputEmail = styled.TextInput`

`;

export const InputPass = styled.TextInput`

`;

export const SignIn = styled.TouchableOpacity`

`;
