import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  margin: 80px auto -80px auto;
  width: ${RFValue(316)}px;
  height: ${RFValue(40)}px;
  border-radius: 250px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Research = styled.TextInput`
  color: #474747;
`;