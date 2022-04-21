import { createPortal } from 'react-dom';

type Product = {
  id: number;
  product_name: string;
  quantity: number;
  price: {
    cost: number;
    sale: number;
  };
};

type ModalProps = {
  product: Product;
};

export const Modal = ({ product }: ModalProps) => {
  const element = document.getElementById('root');

  if (!element) return null;
  return createPortal(
    <div>
      <h1>{product.product_name}</h1>
    </div>,
    element
  );
};
