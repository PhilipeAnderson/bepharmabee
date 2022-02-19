import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from  'react-native-gesture-handler';

export const Container = styled(BorderlessButton)`

`;

export const Icon = styled(Feather)`
  font-size: 27px;
  color: ${({ theme }) => theme.colors.textDark};
`;