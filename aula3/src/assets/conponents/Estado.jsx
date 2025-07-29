import { useState } from "react";

export default function Estado() {
  const [valor, setValor] = useState(1);

  function calcular() {
    setValor(valor * 2);
    console.log(valor);
  }

  return (
    <div>
      <h1>Exemplo uso de states</h1>
      <p>resultado: {valor}</p>
      <button onClick={calcular}>Calcular</button>
    </div>
  );
}
