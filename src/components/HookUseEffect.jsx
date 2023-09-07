import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffect sem dependências
  useEffect(() => {
    console.log("Fui renderizado");
  });

  const [number, setNumber] = useState(0);

  const changeNumber = () => setNumber(number + 1);

  // 2 - useEffect com array de dependências vazio
  const [oneTime, setOneTime] = useState(0);

  useEffect(() => {
    setOneTime(oneTime + 1);
  }, []);

  // 3 - useEffect com array de dependências
  const [dependency, setDependency] = useState(5);
  const [button, setButtom] = useState(0);

  useEffect(() => {
    setDependency(dependency + 1);
  }, [button]);

  // 4 - cleanup
  const [cleanupCounter, setCleanupCouter] = useState(0);

  useEffect(() => {
    const timerCount = setTimeout(() => {
      setCleanupCouter(cleanupCounter + 1);
      console.log("Contador automático com cleanup");
    }, 1000);
    return () => clearTimeout(timerCount);
  }, [cleanupCounter]);

  return (
    <div>
      <h1>useEffect</h1>
      <p>
        A função deste hook é evitar que os elementos React sejam renderizados
        repetidas vezes sem controle na interface do usuário. Isso pode
        acontecer se no código houverem situações que invoquem uma nova
        renderização do componente sem controle de quando essas invocações
        precisam acontecer. Para evitar isso, o useEffect cria um escopo que só
        será renderizado quando algum estato for alterado. É possível determinar
        quais estados afetam diretamente um determinado escopo, ignorando todas
        as outras alterações. À essas determinações, damos o nome de
        dependências.
      </p>
      <p>A sintaxe de useEffect é:</p>
      <code>useEffect = {"(() => {escopo do hook}, [dependencias])"}</code>
      <h2>useEffect sem dependências</h2>
      <p>
        Quando execudado sem argumentos de dependências, o useEffect é
        renderizado a cada mudança no componente, mesmo que fora de seu escopo.
        No exemplo a seguir, há uma chamada de console log dentro do escopo de
        useEffect, sendo renderizada assim que a página é carregada. Há um
        número que está fora do escopo do hook em questão, mas quando alterado,
        provoca uma nova renderização do useEffect como pode ser vista no painel
        de Console, no inspector do navegador.
      </p>
      <p>Neste caso, o uso de useEffect ficou da seguinte maneira:</p>
      <code> useEffect{'(() => {console.log("Fui renderizado")})'};</code>
      <span className="divider"></span>
      <p>Número fora do escopo de useEffect: {number}</p>
      <button onClick={changeNumber}>Alterar número</button>
      <h2>useEffect com array de dependências vazio</h2>
      <p>
        Quando há a declaração do array de dependências, mas este está vazio, os
        argumentos do escopo de useEffect serão renderizadas apenas uma vez, na
        inicialização do componente.
      </p>
      <p>
        Isso é muito útil quando precisamos que algo se altere apenas uma vez,
        como uma requisição a um banco de dados em que precisamos dos dados
        apenas no carregamento da página, por exemplo.
      </p>
      <p>
        No exemplo a seguir á uma mudança de estado que adiciona 1 número a cada
        vez que há uma nova renderização em useEffect. Podemos ver que por mais
        que mexamos em outros estados, como no contador acima, este não se
        altera.
      </p>
      <p>
        Para isso, foi declarado um array vazio depois do escopo, demosntrado a
        seguir
      </p>
      <code>
        useEffect{"(() => {setOneTime(oneTime + 1);}, "}
        <span className="emphasis">{"[]"}</span>
        {")"};
      </code>
      <span className="divider"></span>
      <p>Este número foi renderizado {oneTime} única vez.</p>
      <h2>useEffect com array de dependências</h2>
      <p>
        Neste exemplo, será declarado um estado que servirá de critério para que
        o useEffect atue. Em outras palavras, sempre que o(s) estado(s) que
        foi(foram) declarado(s) se alterar(alteram), a lógica dentro do escopo
        do hook será executada e todas outras mudanças de estado serão
        ignoradas.
      </p>
      <span className="left">
        <code>const [dependency, setDependency] = useState(5);</code>
        <code>const [button, setButtom] = useState(0);</code>
        <code className="code-divider"></code>
        <code>
          {"useEffect(() => {setDependency(dependency + 1)},"}{" "}
          <span className="emphasis">{"[button]"}</span>
          {")"}
        </code>
      </span>
      <p>
        Aqui, o botão tem um contador que altera o estado de button, que por sua
        vez inicia em 0. Toda vez que este estado ("button") é alterado, o
        useEffect detecta e executa sua lógica. Neste caso incrementa o estado
        "dependency" que inicia em 5, mas que é executado uma vez no
        carregamento da página, por isso vemos 6 logo no início.
      </p>
      <span className="divider"></span>
      <p>Número dentro do escopo: {dependency}</p>
      <button onClick={() => setButtom(button + 1)}>Contador: {button}</button>
      <h2 className="important"> ! Importante</h2>
      <p>
        Deve-se ter cuidado ao usar como dependência um estado que é alterado
        pelo próprio useEffect, porque isso gera um loop infinito, uma vez que o
        próprio hook faz a alteração e em seguida detecta esta alteração,
        executando novamente a mesma ação de forma ininterrúpta.
      </p>
      <p>
        Isso pode afetar o desempenho da página e pode acarretar em execução da
        função, mesmo quando muda-se de página.
      </p>
      <p>
        Para resolver isso, utilizamos um "Cleanup" com um return no fim de
        useEffect, para impedir o efeito desta renderização quando o usuário
        estiver em outra página.
      </p>
      <h2>Cleanup</h2>
      <p>
        A seguir, temos um contador automático que altera o estado se si mesmo a
        cada 1 segundo. Ele está dentro de useEffect e por estar sendo
        monitorado pelo próprio hook, cada vez que é alterado, é renderizado
        novamente e mostrado para o usuário.
      </p>
      <p>
        Junto com este contador, há um "console.log" que envia mensagem para o
        Console do Navegador, nos permitindo verificar sua execução mesmo depois
        que a outra página foi verificada.
      </p>
      <p>A sintaxe, neste caso, será:</p>
      <span className="left">
        <code>{"const [cleanupCounter, setCleanupCouter] = useState(0);"}</code>
        <code className="code-divider"></code>
        <code>{"useEffect(() => {"}</code>
        <code className="indent1">
          {"const timerCount = setTimeout(() => {"}
        </code>
        <code className="indent2">
          {"setCleanupCouter(cleanupCounter + 1);"}
        </code>
        <code className="indent2">
          {'console.log("Contador automático com cleanup");'}
        </code>
        <code className="indent1">{"}, 1000);"}</code>
        <code className="indent1 emphasis">
          {"return () => clearTimeout(timerCount);"}
        </code>
        <code>{"}, [cleanupCounter]);"}</code>
      </span>
      <span className="divider"></span>
      <p>Contador automátio com Cleanup: {cleanupCounter}</p>
    </div>
  );
};

export default HookUseEffect;
