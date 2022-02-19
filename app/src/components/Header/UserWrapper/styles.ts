import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  padding: 0 14px;
  margin-top: ${getStatusBarHeight() + RFValue(18)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;