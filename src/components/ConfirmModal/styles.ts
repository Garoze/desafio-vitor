import styled from 'styled-components';

import { Colors } from '../../styles/Colors';

export const Backdrop = styled.div`
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Header = styled.header`
  width: 100%;

  display: inline-flex;
  justify-content: center;

  h1 {
    color: ${Colors.purple};
  }
`;

export const Container = styled.div`
  width: 40rem;
  height: 20rem;
  background: white;
  color: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;

  h1 {
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    text-align: left;
  }

  input {
    border: none;
    outline: none;
  }

  label + div + input {
    margin-top: 1rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    max-width: 5rem;
  }

  button + button {
    margin-left: 0.5rem;
  }
`;

export const ConfirmButton = styled.button`
  border: none;
  width: 15rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  padding: 0.25rem;
  background: ${Colors.green};
  color: ${Colors.white};
  font-weight: 600;
  margin-top: 1.5rem;
`;

export const CancelButton = styled.button`
  border: none;
  width: 15rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  padding: 0.25rem;
  background: #973338;
  color: ${Colors.white};
  font-weight: 600;
  margin-top: 1.5rem;
`;
