import { memo, useEffect, useMemo, useState } from "react";
import Footer from "./Footer";

const HookUseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [memoConfig, setMemoConfig] = useState(false);
  const dataBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let newDataBaseWithoutMemo = dataBase.filter((item) => item % 2 == 0);

  let newDataBaseWithMemo = useMemo(() => {
    return dataBase.filter((item) => item % 2 == 0);
  }, []);

  useEffect(() => {
    console.log("Filtrando itens do banco de dados...");
  }, [memoConfig ? newDataBaseWithMemo : newDataBaseWithoutMemo]);

  return (
    <div>
      <h1>useMemo</h1>
      <p>
        Tal como o useCallback, o hook useMemo tem o objetivo de melhorar a
        performance de uma aplicação, mas diferente do primeiro, o useMemo
        guarda o resultado de uma operação lógica, e não a execução desta
        operação. Em outras palavras, ele memoriza o retorno de uma função e só
        permite que essa função seja reconstruída se algum elemento do array de
        dependências sofrer uma alteração.
      </p>
      <span className="divider"></span>
      <p>A sintaxe do useMemo é a seguinte:</p>
      <span className="left">
        <code>const nomeDaFuncao = useMemo({"() => { "}</code>
        <code className="indent1">{"// lógica da função "}</code>
        <code className="indent1">{"reeturn // retorno da função "}</code>
        <code>{"},[dependências]"})</code>
      </span>
      <span className="divider"></span>
      <p>
        Como exemplo, podemos utilizar um filtro realizado à partir de uma
        requisição vinda de um banco de dados. No nosso exemplo esta utilização
        parece (e é) inútil, uma vez que nossa base é pequena, mas imaginemos
        uma lista com 5000 itens. Se a cada re-renderização do componente fosse
        necessário repetir o processo de filtragem dos dados mesmo que seu
        resultado fosse o mesmo, a lentidão da aplicação se tornaria evidente.
        Portanto, este hook se torna bastante útil em casos como este.
      </p>
      <p>
        Novamente usaremos um contador como elemento disparador de novas
        renderizações do elemento para observarmos o comportamento do hook
        através do console do navegador.
      </p>

      <span className="divider2"></span>
      <p>Itens filtrados do Banco de Dados:</p>
      {memoConfig
        ? newDataBaseWithMemo.map((item, index) => (
            <span key={item}>
              <p className="inline">{item}</p>
              {index < newDataBaseWithoutMemo.length - 1 ? (
                <pre className="inline"> - </pre>
              ) : (
                ""
              )}
            </span>
          ))
        : newDataBaseWithoutMemo.map((item, index) => (
            <span key={item}>
              <p className="inline">{item}</p>
              {index < newDataBaseWithoutMemo.length - 1 ? (
                <pre className="inline"> - </pre>
              ) : (
                ""
              )}
            </span>
          ))}
      <button onClick={() => setCounter(counter + 1)} className="block">
        Contador: {counter}
      </button>
      <p>
        Clique no botão acima e confira no console do navegador. A seguir,
        {memoConfig ? " destive" : " acione"} o hook no botão abaixo e repita o
        processo.
      </p>
      <button onClick={() => setMemoConfig(!memoConfig)}>
        Hook useMemo{" "}
        <span className="emphasis">
          {memoConfig ? "Ativado" : "Desativado"}
        </span>
      </button>

      <h2 className="note">! Nota</h2>
      <p>
        Este hook foi criado para auxiliar na performance da aplicação em
        funções complexas, que podem exigir muito do processamento. Se utilizado
        em funções mais simples, de forma indiscriminada, pode surtir o efeito
        contrário e ao invés de melhorar a performance, pode piora-la.
      </p>

      <Footer name="HookUseMemo" />
    </div>
  );
};

export default HookUseMemo;
