import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const Content = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  margin: 90px auto;
  padding: 10px 10px;
`;

export const TitleBestSellers = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Adjust = styled.Text`
  margin: -50px auto;
`;

