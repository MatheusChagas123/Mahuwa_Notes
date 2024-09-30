import { Container } from "./styles"

import {Button} from '../../componets/Button';

export  function Details(){
  
  return (
    <Container>
      <h1>hello world!</h1>
      <span>teste2</span>
     <Button title="Entrar" loading/>
     <Button title="Cadastrar"/>
     <Button title="voltar"/>
    </Container>
    
  )
}