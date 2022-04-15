import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    height: ${RFPercentage(37)}px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    border-bottom-right-radius: 90px;
    background-color: ${({ theme }) => theme.colors.primary};
`;