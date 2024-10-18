import { Container,Links,Content } from "./styles"
import {Header} from '../../componets/header';
import {Button} from '../../componets/Button';
import {Section} from '../../componets/Section';
import {Tag} from '../../componets/Tag';
import {ButtonText} from '../../componets/ButtonText'
export  function Details(){
  
  return (
    <Container>
      <Header/>
    <main>
      <Content>   
      <ButtonText title="excluir nota"/>
      <h1>Introdução a reacet</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequuntur, rerum dolorem, perspiciatis magnam eveniet maiores quae nisi quo praesentium illo numquam! Esse vitae blanditiis, delectus pariatur quam nam eum!</p>
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
      

     </Content>
    </main>
    </Container>
    
  )
}