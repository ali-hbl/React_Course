const Welcome = () => {
  const bonjour = () => console.log('Bonjour');
  const bonsoir = (value) => console.log(value);

  return (
    <div>
      <button onClick={() => bonjour()}>Invoquer une fonction</button>
      <button onClick={() => bonsoir('Bonsoir')}>Invoquer une fonction avec un argument "Bonsoir"</button>
      <button onClick={() => console.log('Bonne nuit')}>CLG sur le bouton</button>
    </div>
  );
};

export default Welcome;
