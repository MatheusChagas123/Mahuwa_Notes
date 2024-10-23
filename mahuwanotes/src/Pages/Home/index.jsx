import{ Container,Brand,Menu,Search,Content,NewNote} from './styles';

import {Header} from '../../componets/header';
import {ButtonText} from '../../componets/ButtonText';
export function Home(){
  return(
    <Container>
    <Brand>
    <h1>MahuwaNote</h1>
    </Brand>
    <Header/> 
    <Menu>
      <li><ButtonText title="Todos" isActive /></li>
      <li><ButtonText title="react" /></li>
      <li><ButtonText title="Node" /></li>

    </Menu>
    <Search>

    </Search>

    <Content>

    </Content>
    
    <NewNote>

    </NewNote>
    </Container>
    
  );
}