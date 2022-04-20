import styled, { css } from 'styled-components/native';
import { Fontisto } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
interface TypeProps {
  type: 'ok' | 'nok'
}

export const Container = styled.View`
  margin-right: 12px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 70px;
  justify-content: flex-end;
  align-items: flex-end;
  overflow: hidden;
`;

export const BackImage = styled.Image`
  width: ${RFValue(320)}px;
  height: ${RFValue(200)}px;
`;

export const Header = styled.View`
  position: absolute;
  margin-top: 20px;
  padding: 5px 25px;
  border-top-left-radius: 20px;
  z-index: 101;
  background-color: ${({ theme }) => theme.colors.backgroundSoft};
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.shape};
  margin-right: 20px;
`;

export const Icon = styled(Fontisto)<TypeProps>`
  font-size: ${RFValue(36)}px;

  ${({ type }) => type === 'ok' && css`
    color: ${({ theme }) => theme.colors.motorcycleDelivery}
  `};

  ${({ type }) => type === 'nok' && css`
    color: ${({ theme }) => theme.colors.motorcycleNoDelivery}
  `};
`;