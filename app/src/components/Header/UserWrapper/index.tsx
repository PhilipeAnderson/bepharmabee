import React, { ReactNode } from 'react';

import {
  Container
} from './styles';

interface ChildrenProps{
  children: ReactNode
}

export function UserWrapper({ children }: ChildrenProps) {
  return(
    <Container>
      { children }
    </Container>
  )
};