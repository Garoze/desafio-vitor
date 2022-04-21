import { useState } from 'react';
import { createPortal } from 'react-dom';

import { api } from '../../services/api';

import { Input } from '../Input';

import {
  ConfirmButton,
  CancelButton,
  Container,
  Backdrop,
  Header,
  ButtonsContainer,
  InputsContainer,
} from './styles';

type Product = {
  id: number;
  product_name: string;
  quantity: number;
  price: {
    cost: number;
    sale: number;
  };
};

type AddModalProps = {
  productsLen: number;
  closeModal: () => void;
  handleUpdate: () => void;
};

export const AddModal = ({
  productsLen,
  closeModal,
  handleUpdate,
}: AddModalProps) => {
  const element = document.getElementById('root');
  if (!element) return null;

  const [addName, setAddName] = useState('');
  const [addQuantity, setAddQuantity] = useState(0);
  const [addPriceCost, setAddPriceCost] = useState(0);
  const [addPriceSale, setEAddPriceSale] = useState(0);

  const handleAddProduct = async () => {
    const addProduct: Product = {
      id: productsLen + 1,
      product_name: addName,
      quantity: addQuantity,
      price: {
        cost: addPriceCost,
        sale: addPriceSale,
      },
    };
    await api.post(`/products`, addProduct);
    handleUpdate();
    closeModal();
  };

  return createPortal(
    <Backdrop>
      <Container>
        <Header>
          <h1>Adicionar Produto</h1>
        </Header>
        <InputsContainer>
          <label>Nome</label>
          <Input
            type="text"
            value={addName}
            placeholder="Nome do produto"
            onChange={(e) => setAddName(e.target.value)}
          />
          <label>Quantidade</label>
          <Input
            type="number"
            value={String(addQuantity)}
            onChange={(e) => setAddQuantity(+e.target.value)}
          />
          <label>Custo</label>
          <Input
            type="number"
            step="0.1"
            min="0"
            value={String(addPriceCost)}
            onChange={(e) => setAddPriceCost(+e.target.value)}
          />
          <label>Venda</label>
          <Input
            type="number"
            step="0.1"
            min="0"
            value={String(addPriceSale)}
            onChange={(e) => setEAddPriceSale(+e.target.value)}
          />
        </InputsContainer>
        <ButtonsContainer>
          <CancelButton onClick={closeModal}>Cancelar</CancelButton>
          <ConfirmButton onClick={handleAddProduct}>Confirmar</ConfirmButton>
        </ButtonsContainer>
      </Container>
    </Backdrop>,
    element
  );
};
