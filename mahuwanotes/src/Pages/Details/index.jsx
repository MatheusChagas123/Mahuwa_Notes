import { Container,Links } from "./styles"
import {Header} from '../../componets/header';
import {Button} from '../../componets/Button';
import {Section} from '../../componets/Section';
import {Tag} from '../../componets/Tag';
import {ButtonText} from '../../componets/ButtonText'
export  function Details(){
  
  return (
    <Container>
      <Header/>
      <ButtonText title="excluir nota"/>
      <Section title="Links úteis">        
        <Links>
        <li><a href="#">https://app.rocketseat.com.br/classroom/stage-09</a></li>
          <li><a href="#">https://app.rocketseat.com.br/classroom/stage-09</a></li>
        </Links>
        </Section>

        <Section title="Links úteis">

        </Section>

       <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="node" />
       </Section>
     <Button title="voltar"/>
    </Container>
    
  )
}