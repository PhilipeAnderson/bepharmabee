import React from 'react';

import {
  Container,
  Icon
} from './styles';

export function LogoutButton() {
  return(
    <Container onPress={() => {}}>
      <Icon name="power" />
    </Container>
  )
}