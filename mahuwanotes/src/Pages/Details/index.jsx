import { Container,Links } from "./styles"
import {Header} from '../../componets/header';
import {Button} from '../../componets/Button';
import {Section} from '../../componets/Section';
export  function Details(){
  
  return (
    <Container>
      <Header/>
      <Section title="Links úteis">
        <Links>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
        </Links>
        </Section>
     <Button title="voltar"/>
    </Container>
    
  )
}