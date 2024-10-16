import { Container,Links } from "./styles"
import {Header} from '../../componets/header';
import {Button} from '../../componets/Button';
import {Section} from '../../componets/Section';
import {Tag} from '../../componets/Tag';
export  function Details(){
  
  return (
    <Container>
      <Header/>
      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://ludopedia-anexos.nyc3.digitaloceanspaces.com/zombicide_green_hor_207365.pdf</a></li>
          <li><a href="#">https://ludopedia-anexos.nyc3.digitaloceanspaces.com/zombicide_green_hor_207365.pdf</a></li>
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