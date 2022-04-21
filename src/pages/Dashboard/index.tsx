import { useState, useEffect } from 'react';
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai';

import { api } from '../../services/api';

import { AddProduct, Container, EditContainer, Table, Td, Th } from './styles';

type Product = {
  id: number;
  product_name: string;
  quantity: number;
  price: {
    cost: number;
    sale: number;
  };
};

export const Dashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await api.get<Product[]>('/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <AddProduct>
        Novo produto
        <AiOutlinePlus size={18} />
      </AddProduct>
      <Table>
        <thead>
          <tr>
            <Th>Produto</Th>
            <Th>Qnt</Th>
            <Th>Custo</Th>
            <Th>Venda</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
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
                  <button>
                    <AiOutlineEdit size={25} />
                  </button>
                  <button>
                    <AiOutlineDelete size={25} />
                  </button>
                </EditContainer>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
