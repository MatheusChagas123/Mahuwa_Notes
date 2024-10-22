import{ Container,Brand,Menu,Search,Content,NewNote} from './styles';

import {Header} from '../../componets/header';
export function Home(){
  return(
    <Container>
    <Brand>
    <h1>MahuwaNote</h1>
    </Brand>
    <Header/> 
    <Menu>

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