import React from 'react';
import { UserInfo } from './UserInfo';
import { LogoutButton } from './LogoutButton';

import {
  Container
} from './styles';

export function UserWrapper() {
  return(
    <Container>
      <UserInfo />
      <LogoutButton />
    </Container>
  )
};