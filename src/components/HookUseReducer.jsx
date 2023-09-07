import { useReducer } from "react";

const HookUseReducer = () => {
  //  1 - começando com o useReducer
  const [number, dispatchNumber] = useReducer((state, action) => {
    return Math.random(state);
  }, 1);

  //   2 - avançando no useReducer
  const initialTasks = {
    tasks: [
      { id: 1, text: "fazer alguma coisa" },
      { id: 2, text: "fazer outra coisa" },
    ],
    inputText: "",
  };

  const functionUseReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        action.e.preventDefault();
        const value = action.e.target[0].value;
        const newTask = {
          id: Math.random(),
          text: value,
        };
        console.log(action.e);
        return { ...state, tasks: [...state.tasks, newTask], inputText: "" };

      case "INPUT":
        const valueInput = action.e.target.value;
        return { ...state, inputText: valueInput };

      case "DELETE":
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };

      default:
        return state;
    }
  };

  const [stateTask, dispatchTasks] = useReducer(
    functionUseReducer,
    initialTasks
  );

  return (
    <div>
      <h1>useReducer</h1>
      <p>
        O useReducer funciona como o useState, mas diferente deste, o useReducer
        armazena muitos mais estados nele dentro de um objeto e para que
        possamos alterar estes estados, precisamos de uma função que é acionada
        por meio de "dispatch".
      </p>
      <p>A sintaxe do useReducer é:</p>
      <code>const [state, dispatch] = useReducer(reducer, initialState)</code>
      <p>
        Onde "state" é o local em que o objeto é armazenado, "dispatch" é a
        chamada para a função que altera os estados, "reducer" é a função
        chamada por dispatch e "initialState" é o objeto com todos os seus
        estados iniciais podendo este ser opcional. Todos esses nomes podem ser
        alterados.
      </p>
      <span className="divider"></span>
      <p>Número: {number}</p>
      <button onClick={dispatchNumber}>Alterar Número</button>

      <h2>useReducer com funções complexas - switch</h2>
      <p>
        O useReducer permite a chamada de funções complexas por meio do elemento
        action que existe dentro de "dispatch". Cada vez que invocamos o
        "dispatch" em uma ação, recebemos dois parâmetros: "state" e "action".
      </p>
      <p>
        "state" é o estado do objeto armazenado no momento e "action" é tudo o
        que pode ser enviado como valores para a execussão da função.
      </p>
      <p>
        É muito comum a abordagem de switch para lidar com estes diversos
        estados. Para isso, é enviado por meio de "action" o objeto "type" e a
        partir do valor de "type" são executados os cases.
      </p>
      <p>Desta maneira, um exemplo seria:</p>
      <span className="left">
        <code>
          {"const functionUseReducer = ("}
          <span className="emphasis">state, action</span>
          {") => {"}
        </code>
        <code className="indent1">
          {"  switch ("}
          <span className="emphasis">action.type</span>
          {") {"}
        </code>
        <code className="indent2">
          "INPUT" case <span className="emphasis">"INPUT"</span>:
        </code>
        <code className="indent3">
          action.<span className="emphasis">e</span>.preventDefault{"();"}
        </code>
        <code className="indent3">{"// lógica a ser executada"}</code>
        <code className="indent3">{"return {...state}"}</code>
        <code>{"}"}</code>
        <code className="code-divider"> </code>
        <code>
          {"onSubmit={(e) => dispatchTasks("}
          <span className="emphasis">{'{ type: "INPUT", e }'}</span>
          {")}"}
        </code>
      </span>

      <span className="divider"></span>
      <p>
        Digite algo e clique em enviar para adicionar uma tarefa ou clique duas
        vezes sobre uma tarefa para deletá-la.{" "}
      </p>
      <span className="space"></span>
      <ul className="usereducer-ul">
        {stateTask.tasks.map((task) => (
          <li
            key={task.id}
            onDoubleClick={() =>
              dispatchTasks({ type: "DELETE", payload: task.id })
            }
          >
            {task.text}
          </li>
        ))}
      </ul>

      <form onSubmit={(e) => dispatchTasks({ type: "ADD", e })}>
        <input
          type="text"
          name="task"
          value={stateTask.inputText}
          onChange={(e) => dispatchTasks({ type: "INPUT", e })}
          placeholder="Digite um novo item..."
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default HookUseReducer;
