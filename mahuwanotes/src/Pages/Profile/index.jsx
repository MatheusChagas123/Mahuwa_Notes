import {useState} from 'react';
import { FiArrowLeft,FiUser, FiMail, FiLock,FiCamera} from 'react-icons/fi';
import {Input} from '../../components/Input';
import {Button} from '../../components//Button';

import {useAuth} from"../../hooks/auth";
import {Container,Form,Avatar} from './styles';
import {Link} from 'react-router-dom';

export function Profile (){
  const {user} = useAuth();
  const [name,setName] =useState(user.name);
  const [email,setEmail] =useState(user.email);
  const [passwordOld,setPasswordOld] =useState();
  const [passwordNew,setPasswordNew] =useState();
  return(
    <Container>
      <header>
        <Link to="/"> <FiArrowLeft/>
        </Link>
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
          value ={name}
          OnChange ={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          OnChange ={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          OnChange ={e => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder="Nova atual"
          type="password"
          icon={FiLock}
          OnChange ={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}