import { useState } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

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

type EditModalProps = {
  product: Product;
  closeModal: () => void;
  handleUpdate: () => void;
};

export const EditModal = ({
  product,
  closeModal,
  handleUpdate,
}: EditModalProps) => {
  const element = document.getElementById('root');
  if (!element) return null;

  const [editName, setEditName] = useState(product.product_name);
  const [editQuantity, setEditQuantity] = useState(product.quantity);
  const [editPriceCost, setEditPriceCost] = useState(product.price.cost);
  const [editPriceSale, setEditPriceSale] = useState(product.price.sale);

  const handleEdit = async () => {
    const editedProduct: Product = {
      id: product.id,
      product_name: editName,
      quantity: editQuantity,
      price: {
        cost: editPriceCost,
        sale: editPriceSale,
      },
    };
    await api.patch(`/products/${editedProduct.id}`, editedProduct);
    handleUpdate();
    closeModal();
  };

  return createPortal(
    <Backdrop>
      <Container>
        <Header>
          <h1>Editar Produto</h1>
        </Header>
        <InputsContainer>
          <label>Nome</label>
          <Input
            type="text"
            placeholder={product.product_name}
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <label>Quantidade</label>
          <Input
            type="number"
            placeholder={String(product.quantity)}
            value={editQuantity}
            onChange={(e) => setEditQuantity(+e.target.value)}
          />
          <label>Custo</label>
          <Input
            type="number"
            step="0.1"
            min="0"
            placeholder={String(product.price.cost)}
            value={editPriceCost}
            onChange={(e) => setEditPriceCost(+e.target.value)}
          />
          <label>Venda</label>
          <Input
            type="number"
            step="0.1"
            min="0"
            placeholder={String(product.price.sale)}
            value={editPriceSale}
            onChange={(e) => setEditPriceSale(+e.target.value)}
          />
        </InputsContainer>
        <ButtonsContainer>
          <CancelButton onClick={closeModal}>Cancelar</CancelButton>
          <ConfirmButton onClick={handleEdit}>Confirmar</ConfirmButton>
        </ButtonsContainer>
      </Container>
    </Backdrop>,
    element
  );
};
