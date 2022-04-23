import React, { useState, useEffect } from 'react';
import {
  Container,
  Title,
  Name
} from './styles';

 
import { db } from './peopleData';

export function TesteApi() {

  const [ dataPeople, setDataPeople ] = useState({})

  useEffect(() => {
    setTimeout(() => {
      setDataPeople(db)
    }, 1000)
  }, [])

  console.log(dataPeople)

return(
  <Container>
      <Title>Teste API</Title>
      {dataPeople.map(item => (
        <Name>{item.name}</Name>
        ))}

    </Container>
  )
};