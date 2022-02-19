import React, { ReactNode } from 'react';
import { UserWrapper } from './UserWrapper';

import { Container } from './styles';

interface ChildrenProps{
  children: ReactNode;
}

export function Header({ children }: ChildrenProps){
  return(
    <Container>
      <UserWrapper>
        { children }
      </UserWrapper>
    </Container>
  )
};