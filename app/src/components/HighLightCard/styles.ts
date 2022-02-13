import styled, { css } from 'styled-components/native';
import { Fontisto } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
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
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const BackImage = styled.Image`
  width: 510px;
  height: 300px;
`;

export const Header = styled.View`
  position: absolute;
  padding: 0 25px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.shape};
  z-index: 101;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  margin-right: 20px;
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