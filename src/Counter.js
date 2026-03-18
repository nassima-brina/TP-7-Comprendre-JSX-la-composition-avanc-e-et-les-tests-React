import { useState } from 'react';

function ClickCounter() {
  const [value, setValue] = useState(0);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);
  const reset = () => setValue(0);

  return (
    <div>
      <h3>Gestion du compteur</h3>

      <p>Valeur actuelle : {value}</p>

      <button onClick={increment}> Ajouter</button>
      <button onClick={decrement}> Retirer</button>
      <button onClick={reset}> Réinitialiser</button>
    </div>
  );
}

export default ClickCounter;