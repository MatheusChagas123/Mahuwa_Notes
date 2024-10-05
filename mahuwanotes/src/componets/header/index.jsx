import { Container, Profile } from './styles'; // Corrigido aqui

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/MatheusChagas123.png"
          alt="foto do usuário Matheus Chagas"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Matheus Chagas</strong>
        </div>
      </Profile>
    </Container>
  );
}
