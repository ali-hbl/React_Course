import Wrapper from './Wrapper';

const Car = ({ name, color, year }) => {
  return (
    name && (
      <Wrapper>
        <p>
          Marque: <strong>{name}</strong>
        </p>
        <p>
          Age: <strong>{year}</strong>
        </p>
        <p>
          Couleur: <strong>{color ? color : 'Pas de couleur'}</strong>
        </p>
      </Wrapper>
    )
  );
};

export default Car;
