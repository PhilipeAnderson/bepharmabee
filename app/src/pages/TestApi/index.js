import React, { useState, useEffect } from 'react';
import {
  Container,
  Name,
  Title,
  //Name
} from './styles';

 
import { db } from './peopleData';

export function TesteApi() {

  const [ dataPeople, setDataPeople ] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setDataPeople(db)
    }, 1000)
  }, [])

  //console.log(dataPeople)
  //console.log(db)

  
return(
  <Container>
      <Title>Teste API</Title>
      <Name>
        { dataPeople.map(item => item.name) }
      </Name>
      

    </Container>
  )
};