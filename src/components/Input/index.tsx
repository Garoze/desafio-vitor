import { Container } from './styles';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ children, ...rest }: InputProps) => {
  return (
    <Container>
      <input {...rest} />
      {children}
    </Container>
  );
};
