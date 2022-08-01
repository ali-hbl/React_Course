import Wrapper from './Wrapper';

const Car = ({ children, color }) => {
  return (
    children && (
      <Wrapper>
        <p>
          Marque: <strong>{children}</strong>
        </p>
        <p>
          Couleur: <strong>{color ? color : 'Pas de couleur'}</strong>
        </p>
      </Wrapper>
    )
  );
};

export default Car;
