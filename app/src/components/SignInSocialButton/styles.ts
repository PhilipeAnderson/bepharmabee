import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ImageContainer = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(16)}px;
`;

export const Text = styled.Text`
  flex: 1;
  text-align: center;
  font-size: ${RFValue(16)}px;
`;
