import { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { api } from '../../services/api';
import { Product } from '../../components/Product';

import { AddProduct, Container, Table, Th } from './styles';
import { AddModal } from '../../components/AddModal';

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
  const [addProductModal, setAddProductModal] = useState(false);

  const fetchProducts = async () => {
    const { data } = await api.get<Product[]>('/products');
    setProducts(data);
  };

  const handleUpdate = () => fetchProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  const openModal = () => setAddProductModal(true);
  const closeModal = () => setAddProductModal(false);

  return (
    <Container>
      {addProductModal && (
        <AddModal
          productsLen={products.length}
          closeModal={closeModal}
          handleUpdate={handleUpdate}
        />
      )}
      <AddProduct onClick={openModal}>
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
            <Product
              key={product.id}
              product={product}
              handleUpdate={handleUpdate}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
