import { useState } from "react";
import "./App.css";

//Peso ÷ (Altura × Altura)

function App() {
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  let [resultado, setResultado] = useState("");

  function calculandoImc() {
    const resultado = Number(peso) / Math.pow(Number(altura), 2);
    resultadoImc(resultado.toFixed(2));
  }

  function resultadoImc(imc) {
    if (imc <= 18.5) {
      setResultado(`IMC: ${imc} Magreza`);
    } else if (imc <= 24.9) {
      setResultado(`IMC: ${imc} Normal`);
    } else if (imc <= 29.9) {
      setResultado(`IMC: ${imc} Sobrepeso`);
    } else if (imc <= 39.9 ) {
      setResultado(`IMC: ${imc} Obesidade`);
    }
    else{
      setResultado(`IMC: ${imc} Obesidade Grave`);
    }
  }

  return (
    <>
      <h1>Calculadora de IMC</h1>
      <div className="container">
        <div className="form">
          <input
            type="number"
            placeholder="Altura(M)"
            onChange={(event) => setAltura(event.target.value)}
          />
          <input
            type="number"
            placeholder="Peso(Kg)"
            onChange={(event) => setPeso(event.target.value)}
          />
          <input
            type="submit"
            className="submit"
            value="Calcular"
            onClick={calculandoImc}
          />
        </div>
        <div className="infor">
          {resultado == "" ? (
            <p>
              <strong>O</strong> IMC (Índice de Massa Corpórea) é uma medida
              internacional usada para avaliar nosso peso ideal. Seu cálculo é
              feito dividindo-se o peso pela altura elevada ao quadrado.
              <br />O resultado diz se estamos dentro de uma faixa saudável ou
              não. Caso você esteja abaixo ou acima do recomendado, procure
              ajuda especializada para receber acompanhamento.
            </p>
          ) : (
            <p className="resultado">{resultado}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
