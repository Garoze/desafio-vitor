import { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

import { api } from '../../services/api';

import { EditModal } from '../EditModal';
import { ConfirmModal } from '../ConfirmModal';

import { Td, EditContainer } from './styles';

type Product = {
  id: number;
  product_name: string;
  quantity: number;
  price: {
    cost: number;
    sale: number;
  };
};

type ProductProps = {
  product: Product;
  handleUpdate: () => void;
};

export const Product = ({ product, handleUpdate }: ProductProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const openConfirmModal = () => setIsConfirmModalOpen(true);
  const closeConfirmModal = () => setIsConfirmModalOpen(false);

  const handleDelete = async () => {
    console.log(product.id);

    await api.delete(`/products/${product.id}`);
    handleUpdate();
  };

  return (
    <>
      {isEditModalOpen && (
        <EditModal product={product} closeModal={closeEditModal} />
      )}
      {isConfirmModalOpen && (
        <ConfirmModal
          closeModal={closeConfirmModal}
          handleUpdate={handleUpdate}
          callBack={handleDelete}
        />
      )}
      <tr key={product.id}>
        <Td>{product.product_name}</Td>
        <Td>{product.quantity}</Td>
        <Td>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.price.cost)}
        </Td>
        <Td>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.price.sale)}
        </Td>
        <Td>
          <EditContainer>
            <button onClick={openEditModal}>
              <AiOutlineEdit size={25} />
            </button>
            <button onClick={openConfirmModal}>
              <AiOutlineDelete size={25} />
            </button>
          </EditContainer>
        </Td>
      </tr>
    </>
  );
};
