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
        description="Combate a febre a gripe e enxaqueca."
        pharmacy="Nissei"
        price="22"
        cents="99"
      />
      <Product 
        image="https://cdn-cosmos.bluesoft.com.br/products/7896004755892"
        name="Naldecon"
        description="Dores no corpo e sensações de calafrio."
        pharmacy="Droga Raia"
        price="28"
        cents="69"
      />
      <Product 
        image="https://farmacoi.com.br/wp-content/uploads/2014/01/remedio-generico1.jpg"
        name="Cataflam"
        description="Dores de Garganta e gripe."
        pharmacy="Panvel"
        price="14"
        cents="99"
      />
      <Product 
        image="https://farma22.vteximg.com.br/arquivos/ids/177921-1000-1000/generico_farma22.jpg?v=637303309967600000"
        name="Doril"
        description="Dores de cabeça do dia a dia."
        pharmacy="Drogamed"
        price="11"
        cents="49"
      />
      <Product 
        image="https://lqes.iqm.unicamp.br/images/pontos_vista_artigo_opiniao_120_1_generico.gif"
        name="Clopidrop"
        description="Mal estar em dores de estomago."
        pharmacy="Pague Menos"
        price="8"
        cents="99"
      />
      <Product 
        image="https://uploads.consultaremedios.com.br/product_variation_images/full/5bd39c49ca09a5fcd159b3937df4729ea8b00b54.jpg?1543323528"
        name="Paracetamol"
        description="Esse é o verdadeiro Mata Covid."
        pharmacy="Pague Menos"
        price="24"
        cents="49"
      />

    </Container>
  )
};