import {RiShutDownLine} from 'react-icons/ri'
import {useAuth} from "../../hooks/auth"

import { Container, Profile,Logout } from './styles'; // Corrigido aqui

export function Header() {

  const {signOut} = useAuth();
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
      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
