import { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

import { api } from '../../services/api';

import { EditModal } from '../EditModal';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = async () => {
    console.log(product.id);

    await api.delete(`/products/${product.id}`);
    handleUpdate();
  };

  return (
    <>
      {isModalOpen && <EditModal product={product} closeModal={closeModal} />}
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
            <button onClick={openModal}>
              <AiOutlineEdit size={25} />
            </button>
            <button onClick={handleDelete}>
              <AiOutlineDelete size={25} />
            </button>
          </EditContainer>
        </Td>
      </tr>
    </>
  );
};
