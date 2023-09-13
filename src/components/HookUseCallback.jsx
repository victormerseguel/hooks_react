import { useState, useCallback } from "react";
import HookUseCallbackAux from "./HookUseCallbackAux";
import Footer from "./Footer";

const HookUseCallback = () => {
  const [useHook, setUseHook] = useState(false);
  const [counter, setCounter] = useState(0);

  const getItemsFromDBCallback = useCallback(() => {
    return ["item db 1", "item db 2", "item db 3", "item db 4", "item db 5"];
  }, []);
  const getItemsFromDB = () => {
    return ["item db 1", "item db 2", "item db 3", "item db 4", "item db 5"];
  };

  return (
    <div>
      <h1>useCallback</h1>
      <p>
        Este hook é considerado mais avançado e tem como objetivo melhorar a
        performance de aplicações, evitando a execução de funções muito
        complexas quando nada se alterou desde a última execução. Ele
        basicamente memoriza a execução de uma função, fazendo com que ela não
        seja reconstruída desnecessariamente a cada renderização.
      </p>
      <p>
        Este hook é bastante utilizado quando uma função localizada no
        componente pai é acionada pelo componente filho. Isso porque a cada
        re-renderização de um componente, todos os componentes filhos também são
        renderizados, reconstruíndo todo a lógica das quais eles dependem.
        Quando se trata de lógicas complexas, como por exemplo fetch em banco de
        dados onde a depender dos dados e seus tamanhos, a execução destas
        requisições podem se tornar muito demoradas, se a cada re-renderização
        do componente for feita uma nova requisição, a navegação e a experiência
        do usuário podem se tornam muito ruins.
      </p>
      <span className="divider"></span>
      <p>A sintaxe do useCallback é:</p>
      <span className="left">
        <code>const nomeDaFuncao = useCallback({"() => { "}</code>
        <code className="indent1">{"// lógica da função "}</code>
        <code>{"},[dependências]"})</code>
      </span>
      <span className="divider"></span>
      <p>
        No exemplo a seguir temos uma simulação do exemplo acima, onde no
        componente pai temos uma função que simula o retorno de uma requisição e
        no componente filho temos a chamada desta requisição.
      </p>
      <p>
        Pode-se acompanhar no Console do navegador que, quando o botão indica
        que NÃO está sendo utilizado o hook useCallback, a cada incremento do
        contador temos uma nova requisição no banco de dados. Porém, quando
        utilizado o hook, a requisição ocorre apenas uma vez, no carregamento da
        página, e depois não ocorre mais.
      </p>
      <HookUseCallbackAux
        getItems={useHook ? getItemsFromDBCallback : getItemsFromDB}
      />
      <button className="block" onClick={() => setCounter(counter + 1)}>
        Contador: {counter}
      </button>
      <p>
        Hook useCallback{" "}
        <span className="emphasis">{useHook ? "ativado" : "destivado"}</span>
      </p>
      <p>
        Clique no botão acima e confira no console do navegador. A seguir,
        {useHook ? " destive" : " acione"} o hook no botão abaixo e repita o
        processo.
      </p>
      <button onClick={() => setUseHook(!useHook)}>
        {!useHook ? "Acionar hook useCallback" : "Desativar hook useCalback"}
      </button>

      <h2 className="note">! Nota</h2>
      <p>
        Este hook foi criado para auxiliar na performance da aplicação em
        funções complexas, que podem exigir muito do processamento. Se utilizado
        em funções mais simples, de forma indiscriminada, pode surtir o efeito
        contrário e ao invés de melhorar a performance, pode piora-la.
      </p>

      <Footer name="HookUseCallback" />
    </div>
  );
};

export default HookUseCallback;
