import{FiPlus,FiSearch} from 'react-icons/fi'
import{ Container,Brand,Menu,Search,Content,NewNote} from './styles';

import {Header} from '../../componets/Header';
import {Input} from '../../componets/Input';
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
    <Input  placeholder="Pesquisar pelo título" icon={FiSearch}/>
    </Search>

    <Content>

    </Content>
    
    <NewNote>
    <FiPlus/>
    Criar nota
    </NewNote>
    </Container>
    
  );
}