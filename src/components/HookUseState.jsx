import { useState } from "react";
import Footer from "./Footer";

const HookUseState = () => {
  const urlGitHub =
    "https://github.com/victormerseguel/hooks_react/blob/main/src/components/HookUseState.jsx";

  const [state, setState] = useState("Victor");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target[0].value) return;

    let newName = e.target[0].value;
    setState(newName);
    e.target[0].value = "";
  };

  //   2 - useState com inputs
  const [number, setNumber] = useState("");
  const [numberInput, setNumberInput] = useState("");

  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (!e.target[0].value) return;
    setNumberInput(number);
  };

  return (
    <div className="useState">
      {/* 1 - useState */}
      <h1>useState</h1>
      <p>
        o useState substitui uma variável que precisa de mudança em seu valor
        porque ao ser alterada por meio da propriedade "set", o React renderiza
        novamente este componente exibindo o que foi alterado. Para isso
        precisamos criar uma constante que desestrutura "state" e "setState" num
        array e iguala à useState, ficando sua sintaxe como:
      </p>
      <code>"const [state, setState] = useState("initialValue")".</code>
      <p>
        Onde "state" é o valor amazenado, "setState" é quem faz a alteração do
        valor armazenado em state por meio da chamada setState(novoValor) e
        "initialValue" é opcional e representa a estrutura e os valores iniciais
        de cada estado, geralemte em formato de objedo.
      </p>
      <span className="divider"></span>
      <p>Valor de useState: {state}</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="name" placeholder="Digite um novo valor..." />
        <input type="submit" value="Trocar valor" />
      </form>

      <h2>useState com inputs</h2>
      <p>
        Os estados podem ser alterados de acordo com os valores dos inputs. A
        seguir há dois exemplos.
      </p>
      <p>
        O primeiro iguala o atributo "value" do input de texto com o estado de
        "number" e quando é alterado (onChange), faz a alteração deste mesmo
        estado por meio de setNumber
      </p>
      <code>{"value={number}"}</code>
      <code>{"onChange={(e) => setNumber(e.target.value)}"}</code>
      <p>
        O segundo muda o estado de "numberInput" apenas quando o fomulário é
        enviado (onSubmit), igualando o valor de "numberInput" ao valor de
        "number".
      </p>
      <code>{"<form onSubmit={(e) => handleSubmit2(e)}>"}</code>
      <span className="divider"></span>
      <p></p>

      <form onSubmit={(e) => handleSubmit2(e)}>
        <input
          type="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Selecione um número..."
        />
        <input type="submit" value="Enviar" />
        <p>
          Este número é alterado conforme o campo acima é modificado: {number}
        </p>
      </form>
      <p>
        Este número é modificado apenas quando o botão "Enviar" é acionado:{" "}
        {numberInput}
      </p>
      <Footer name="HookUseState" />
    </div>
  );
};

export default HookUseState;
