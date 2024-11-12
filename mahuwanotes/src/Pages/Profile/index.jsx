import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useAuth } from "../../hooks/auth";
import {api} from '../../services/api';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { Container, Form, Avatar } from './styles';
import { Link } from 'react-router-dom';

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  const avatarUrl = user.avatar ?`${api.defaults.baseURL}/files/${user.avatar}`:avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
      avatar: avatarFile
    };

    await updateProfile({user,avatarFile});
  }


   function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);
    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/"> <FiArrowLeft /> </Link>
      </header>
      <Form onSubmit={handleUpdate}>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" type="submit" />
      </Form>
    </Container>
  );
}
