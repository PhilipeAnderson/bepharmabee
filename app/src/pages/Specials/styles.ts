import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const Header = styled.View`
  width: 100%;
  height: 20%;
  background-color: ${({ theme }) => theme.colors.backgroundLight};

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: ${RFValue(18)}px;
`;

export const Category = styled.View`
  width: 100%;
  padding: 10px 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const CategoryText = styled.Text`
  font-size: ${RFValue(16)}px;
`;

export const List = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.backgroundList};
`;