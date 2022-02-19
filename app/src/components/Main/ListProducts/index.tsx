import React from 'react';

import { Product } from './Product';

import {
  Container
} from './styles';

export function ListProducts() {
  return(
    <Container>
      <Product 
        image="https://lqes.iqm.unicamp.br/images/pontos_vista_artigo_opiniao_120_1_generico.gif"
        name="Novalgina"
        description="Perfeito para o combater a febre e dores no corpo."
        pharmacy="Nissei"
        price="999"
        cents="99"
      />
      <Product 
        image="https://cdn-cosmos.bluesoft.com.br/products/7896004755892"
        name="Naldecon"
        description="Perfeito para o combater a febre e dores no corpo."
        pharmacy="Nissei"
        price="28"
        cents="69"
      />
      <Product 
        image="https://farmacoi.com.br/wp-content/uploads/2014/01/remedio-generico1.jpg"
        name="Cataflam"
        description="Combate a febre  da disposição aos músculos."
        pharmacy="Panvel"
        price="14"
        cents="99"
      />
      <Product 
        image="https://farma22.vteximg.com.br/arquivos/ids/177921-1000-1000/generico_farma22.jpg?v=637303309967600000"
        name="Doril"
        description="Perfeito para o combater a febre e dores no corpo."
        pharmacy="Nissei"
        price="11"
        cents="49"
      />
      <Product 
        image="https://lqes.iqm.unicamp.br/images/pontos_vista_artigo_opiniao_120_1_generico.gif"
        name="Clopidrop"
        description="Perfeito para o combater a febre e dores no corpo."
        pharmacy="Nissei"
        price="8"
        cents="99"
      />

    </Container>
  )
};