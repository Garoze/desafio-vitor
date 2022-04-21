import { createPortal } from 'react-dom';

import {
  ConfirmButton,
  CancelButton,
  Container,
  Backdrop,
  Header,
  ButtonsContainer,
} from './styles';

type confirmModalProps = {
  closeModal: () => void;
  handleUpdate: () => void;
  callBack: () => void;
};

export const ConfirmModal = ({
  closeModal,
  handleUpdate,
  callBack,
}: confirmModalProps) => {
  const element = document.getElementById('root');
  if (!element) return null;

  const handleConfirmFunction = () => {
    callBack();
    handleUpdate();
  };

  return createPortal(
    <Backdrop>
      <Container>
        <Header>
          <h1>Deseja realmente remover este produto?</h1>
        </Header>
        <ButtonsContainer>
          <CancelButton onClick={closeModal}>Cancelar</CancelButton>
          <ConfirmButton onClick={handleConfirmFunction}>
            Confirmar
          </ConfirmButton>
        </ButtonsContainer>
      </Container>
    </Backdrop>,
    element
  );
};
