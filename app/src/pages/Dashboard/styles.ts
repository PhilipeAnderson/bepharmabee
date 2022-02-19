import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.backgroundDark};
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

export const Search = styled.TextInput`
  margin: 80px auto -80px auto;
  width: ${RFValue(316)}px;
  height: ${RFValue(40)}px;
  border-radius: 250px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.shape};
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

