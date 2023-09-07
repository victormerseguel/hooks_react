import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useContext } from "react";
import { SomeContext } from "../context/SomeContext";

const HookUseContext = () => {
  const urlGitHub =
    "https://github.com/victormerseguel/hooks_react/blob/main/src/components/HookUseContext.jsx";

  const { phrase } = useContext(SomeContext);

  return (
    <div>
      <h1>useContext</h1>
      <p>
        O conteúdo a seguir está sendo disponibilizado por meio de Context API
        es está vindo de outro componente.
      </p>
      <p className="emphasis">{phrase}</p>
      <Link to="/usecontextaux">
        <button>Alterar valor por useContext</button>
      </Link>
      <span className="divider2"></span>
      <p>
        O hook useContext tem a função de criar um contexto, ou seja, um escopo,
        onde valores determinados podem ser acessados por todos os componentes
        que fazem parte deste contexto.
      </p>
      <p>Para isso, é necessário:</p>
      <ul className="noBullet">
        <li>- Criar um contexto;</li>
        <li>- Criar um provedor;</li>
        <li>- Disponibilizar valores;</li>
        <li>- Configurar componentes filhos;</li>
        <li>- Utilizar os valores disponibilizados.</li>
      </ul>
      <span className="divider"></span>
      <h2>Criando o contexto</h2>
      <p>
        Para criar o contexto é necessário importar de forma desestruturada{" "}
        "createContext" vindo de "react".
      </p>
      <code>{'import { createContext } from "react"'}</code>
      <p>
        Então, exporta a criação de uma constante com o nome que, por convenção
        termina em "Context", e iguala à "createContext", assim:
      </p>
      <code>{"export const SomeContext = createContext()"}</code>
      <h2>Criando o provedor</h2>
      <p>
        Criar o provedor é como fazer a ligação entre o contexto criado e os
        componentes que se beneficiarão dele, bem como disponibilizar os valores
        que poderão ser acessados pelos componentes.
      </p>
      <p>
        Para isso, deve-se exportar uma constante, mas desta vez em forma de
        função que servirá para criar o Provedor. O nome desta função,
        geralmente é o mesmo do contexto criado, seguido da palavra Provider.
        Esta função recebe um parâmetro em forma de objeto chamada "children".
        Children é uma palavra reservada do react que representa elementos
        filhos que são inseridos de maneira dinâmica.
      </p>
      <code>
        const SomeContextProvider = ({"{"}
        <span className="emphasis">children</span>
        {"}"}) ={"> {}"}
      </code>
      <p>
        Como uma função qualquer, ela recebe uma lógica e retorna algo. O
        retorne dela é um elemento parecido com uma tag html em que tudo o que
        estiver dentro dela, terá à sua disposição os estados que serão
        disponibilizados para os componentes filhos. Esta tag (que não é
        realmente uma tag) é formada pelo contexto criado anteriormente (em
        nosso caso "SomeContext"), seguido de um ponto e a palavra "Provider".
      </p>
      <span className="left">
        {" "}
        <code className="indent1">return {"("}</code>
        <code className="indent2">{"<SomeContext.Provider value={}>"}</code>
        <code className="indent3">{"{children}"}</code>
        <code className="indent2">{"</SomeContext.Provider>"}</code>
        <code className="indent1">{")"}</code>
      </span>
      <h2>Disponibilizando Valores</h2>
      <p>
        A disponibilização dos valores vem da lógica que está dentro da função
        (neste caso SomeContextProvider).
      </p>
      <p>
        O resultado dela, que podem ser estados, variáveis, resultados lógicos
        etc., devem ser passados por meio de uma key chamada "value".
      </p>
      <span className="left">
        <code>
          const SomeContextProvider = ({"{children}"}) ={"> {"}{" "}
        </code>
        <code className="indent1">
          {"const [state, setState] = useState(0)"}
        </code>
        <code className="indent1">{'const name = "Victor"'}</code>
        <code className="indent1">return {"("}</code>
        <code className="indent2">
          {"<SomeContext.Provider "}
          <span className="emphasis">
            value={"{{"}state, setState, name{"}}"}
          </span>
          {">"}
        </code>
        <code className="indent3">{"{children}"}</code>
        <code className="indent2">{"</SomeContext.Provider>"}</code>
        <code className="indent1">{")"}</code>
        <code>{"}"}</code>
      </span>
      <h2>Configurando componentes filhos</h2>
      <p>
        Uma vez criado o contexto, criado o provedor e disponibilizado os
        valores, o próximo passo é configurar como filho, o componente que se
        deseja ter acesso aos dados. Os dados então ficarão acessíveis para este
        componente e todos os seus componentes filhos
      </p>
      <p>
        Neste caso, para deixar os dados disponíveis para toda a aplicação,
        vamos configurar em "main.jsx" para que toda nossa rota tenha acesso.
      </p>
      <p>Em "main.jsx" primeiro vamos importar o provedor criado:</p>
      <code>
        {'import { SomeContextProvider } from "./context/SomeContext.jsx"'}
      </code>
      <p>Depois, vamos "envelopar" o componente que queremos.</p>
      <span className="left">
        <code>
          {'ReactDOM.createRoot(document.getElementById("root")).render('}
        </code>
        <code className="indent1">{"<React.StrictMode>"}</code>
        <code className="indent2 emphasis">{"<SomeContextProvider>"}</code>
        <code className="indent3">{"<RouterProvider router={router} />"}</code>
        <code className="indent2 emphasis">{"</SomeContextProvider>"}</code>
        <code className="indent1">{"</React.StrictMode>"}</code>
        <code>{");"}</code>
      </span>
      <p>Este processo é feito apenas uma vez.</p>
      <h2>Utilizando os valores</h2>
      <p>
        Para utilizar os valores, agora basta ir a um dos elementos envolvidos
        pelo provedor, importar "useContext" e o contexto criado, no nosso caso
        "SomeContext"...
      </p>
      <code>{"import { useContext } from 'react'"}</code>
      <code>{"import { SomeContext } from './context/SomeContext'"}</code>
      <p>
        Em seguida, é preciso desestruturar os estados que necessita utilizando
        "useContext" e "SomeContext" como parâmetro...
      </p>
      <code>{"const {state, setState, name} = useContext(SomeContext)"}</code>
      <p>Pronto! Os dados estão disponíveis para serem usados.</p>
      <h2 className="note">! Nota</h2>
      <p>
        Por convenção, geralmente os contextos criados ficam em uma pasta
        chamada "context" em src
      </p>
      <p>
        Uma aplicação pode ter mais de um contexto e eles podem, inclusive,
        serem aninhados entre si.
      </p>
      <Footer name="HookUseContext" />
    </div>
  );
};

export default HookUseContext;
