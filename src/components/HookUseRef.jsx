import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const HookUseRef = () => {
  const pRef = useRef();
  let change = false;

  const changeRef = () => {
    pRef.current.style.display = "block";

    if (!change) {
      pRef.current.innerHTML =
        "<button style='margin: 10px' class='emphasis'>Agora eu sou um botão</button>";
      change = !change;
    } else {
      pRef.current.innerHTML = "<p class='emphasis'>Eu sou um parágrafo</p>";
      change = !change;
    }
  };

  const [buttonCounter, setButtonCounter] = useState(0);
  const [buttonCounterB, setButtonCounterB] = useState(0);
  const renderCounter = useRef(0);
  let varibleCounter = 0;
  useEffect(() => {
    renderCounter.current += 1;
  });

  return (
    <div>
      <h1>useRef</h1>
      <h2>Armazenando estados</h2>
      <p>O useRef é um hook que está entre uma variável e o useState.</p>
      <p>
        Ele se comporta em grande parte como uma variável, pois quando seu valor
        é alterado, ele não renderiza novamente a página, guardando de forma
        oculta seus dados. Porém diferente da variável, quando a página é
        renderizada por outro elemento, ele mantem o valor que estava guardado
        em seu estado, enquanto que uma variável volta ao seu estado inicial.
        Por isso ele também se parece com o hook useState, porque guarda seu
        estado mesmo nas alterações de renderização.
      </p>

      <span className="divider"></span>
      <p>
        Contador de renderizações da página com useRef: {renderCounter.current}
      </p>
      <button
        onClick={() => {
          setButtonCounter(buttonCounter + 1);
        }}
      >
        Contador com renderização A: {buttonCounter}
      </button>
      <button onClick={() => setButtonCounterB(buttonCounterB + 1)}>
        Contador com renderização B: {buttonCounterB}
      </button>
      <button
        onClick={() => {
          varibleCounter += 1;
          console.log("contagem dá variável: ", varibleCounter);
        }}
      >
        Contador de cliques sem renderização (abrir console)
      </button>
      <span className="divider"></span>
      <p>
        Como é possível notar, quando acionado o botão que não renderiza a
        página, a variável é incrementada no console, mas quando um outro
        elemento qualquer que gera uma nova renderização é acionado, podemos ver
        que a contagem da variável recomeça, o que não acontece com a contagem
        do estado dentro de useRef.
      </p>
      <p>
        O useRef só está sendo renderizado porque está dentro de um useEffect
        sem decraração de dependências, portando sendo acionado a cada nova
        renderização. (<Link to={"/useeffect"}>Ver mais em useEffect</Link>)
      </p>

      <h2>Manipulando a DOM</h2>
      <p>
        Outra função muito interessante do useRef é que ele consegue fazer
        manipulação no DOM ou aplicar eventos, como o JavaScript puro.
      </p>
      <p>
        Todo elemento contido num componente de React tem o atributo “ref”, o
        que permite que a partir dele possam ser feitas mudanças diretamente na
        DOM, como no exemplo a seguir.
      </p>
      <p>
        Quando acionado, o botão altera o conteúdo de uma span, excluindo a tag{" "}
        {"<p>"} e seu contúdo, substituindo por uma {"<button>"}. Este
        comportamento pode ser acompanhado no Inspector {">"} Elements do
        navegador.
      </p>
      <span className="divider"></span>
      <span ref={pRef}>
        <p className="emphasis">Eu sou um parágrafo</p>
      </span>
      <button onClick={changeRef}>Trocar</button>
      <span className="divider"></span>
      <p>
        No exemplo acima, foi utilizado o useRef a partir do artributo "ref" de
        um span, como é possivel verificar no código abaixo.
      </p>
      <span className="left">
        <code>
          <pre>
            {`  import { useRef } from 'react';


  const pRef = useRef();
  let change = false;

  const changeRef = () => {`}
          </pre>
          <span className="emphasis">
            <pre>{`  pRef.current.style.display = "block";`}</pre>
          </span>
          <pre>
            {`
    if (!change) {`}
          </pre>
          <span className="emphasis">
            <pre>{`     pRef.current.innerHTML =
        "<button style='margin: 10px' class='emphasis'>
          Agora eu sou um botão
         </button>";`}</pre>
          </span>
          <pre>
            {`      change = !change;
    } else {`}
          </pre>
          <span className="emphasis">
            <pre>{`     pRef.current.innerHTML = 
        "<p class='emphasis'>
          Eu sou um parágrafo
         </p>";`}</pre>
          </span>
          <pre>
            {`      change = !change;
    }
  };
  
  ________________________________
  
  `}
          </pre>
          <span className="emphasis">{" <span ref={pRef}>"}</span>
          <pre>
            {`    <p>Eu sou um parágrafo</p>
</span>
  `}
          </pre>
        </code>
      </span>

      <Footer name="HookUseRef" />
    </div>
  );
};

export default HookUseRef;
