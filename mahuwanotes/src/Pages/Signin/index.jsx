import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../componets/Input';
import { Button } from '../../componets/Button';

import { Container, Form,Background } from './styles'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Mahuwa Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

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

        <Button title="Entrar" />

        <a href="#">Criar conta</a>
      </Form>
      <Background/>
    </Container>
  )
}