import styled, { css } from 'styled-components/native';
import { Fontisto } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { ImageBackground } from 'react-native';

interface TypeProps {
  type: 'ok' | 'nok'
}


export const Container = styled.View`
  width: ${RFValue(320)}px;
  height: ${RFValue(200)}px;
  margin-right: 12px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 70px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundLight}
`;

export const Header = styled.View`
  margin-top: -140px;
  padding: 0 25px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
`;

export const Icon = styled(Fontisto)<TypeProps>`
  font-size: ${RFValue(24)}px;

  ${({ type }) => type === 'ok' && css`
    color: ${({ theme }) => theme.colors.success}
  `};

  ${({ type }) => type === 'nok' && css`
    color: ${({ theme }) => theme.colors.error}
  `};
`;