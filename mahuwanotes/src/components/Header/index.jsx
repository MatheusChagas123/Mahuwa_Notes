import {RiShutDownLine} from 'react-icons/ri'

import { Container, Profile,Logout } from './styles'; // Corrigido aqui

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/MatheusChagas123.png"
          alt="foto do usuário Matheus Chagas"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Matheus Chagas</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
