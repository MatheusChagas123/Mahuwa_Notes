import { FiMail, FiLock,FiUser } from 'react-icons/fi';

import { Input } from '../../componets/Input';
import { Button } from '../../componets/Button';

import { Container, Form,Background } from './styles'

export function SignUp() {
  return (
    
    <Container>
      <Background/>
      <Form>
        <h1>Mahuwa Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça sua Conta</h2>

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
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Cadastrar" />

        <a href="#">voltar para o login</a>
      </Form>
      
    </Container>
  )
}