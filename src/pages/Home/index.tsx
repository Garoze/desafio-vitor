import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Input } from '../../components/Input';

import {
  Background,
  Header,
  Container,
  ButtonsContainer,
  ConfirmButton,
  InputsContainer,
} from './styles';

export const Home = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { data } = await api.get<[]>(
      `/users?email=${email}&password=${password}`
    );

    if (data.length > 0) {
      localStorage.setItem('login@token', JSON.stringify({ autorized: true }));
      history('/dashboard');
    }
    setEmail('');
    setPassword('');
  };

  return (
    <Background>
      <Container>
        <Header>
          <h1>Painel de Login</h1>
        </Header>
        <InputsContainer>
          <label>Login</label>
          <Input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <Input
            type="password"
            placeholder="E-mail"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputsContainer>
        <ButtonsContainer>
          <ConfirmButton onClick={handleLogin}>Login</ConfirmButton>
        </ButtonsContainer>
      </Container>
    </Background>
  );
};
