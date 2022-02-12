import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  width: 100%;
  height: 100px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  margin-top:10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundLight}
`;