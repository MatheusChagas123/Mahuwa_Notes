import { FiArrowLeft,FiUser, FiMail, FiLock,FiCamera} from 'react-icons/fi';
import {Input} from '../../componets/Input';
import {Button} from '../../componets//Button';
import {Container,Form,Avatar} from './styles';

export function Profile (){
  return(
    <Container>
      <header>
        <a href="/"> <FiArrowLeft/>
        </a>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/MatheusChagas123.png" alt="Foto do usuário"/>
        
        <label htmlFor="avatar">
        <FiCamera/>
       <input id="avatar" type="file" />
        </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova atual"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}