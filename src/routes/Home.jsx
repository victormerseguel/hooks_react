import React from "react";
import HookUseState from "../components/HookUseState";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <h1>Hooks do React</h1>
      <p>
        Os hooks do React são blocos de códigos criados para auxiliarem o
        programador na hora de criar uma aplicação.
      </p>
      <p>
        De forma resumida, e até simplificada, os hooks são códigos contendo
        JavaScript que podem ser reaproveitados diversas vezes durante a criação
        do código e facilitam diversas etapas, como alteração de estados e
        renderização destas alterações, criação de contextos onde valores podem
        ser compartilhados sem a necessidade do uso de "props" de elemento pai
        para elemento filho, dentre outras coisas
      </p>
      <p>
        Além dos hooks já existentes de forma nativa, é possível criar hooks
        customizados, para atenderem necessidades específicas do projeto em
        questão.
      </p>
      <p>
        Como convenção os hooks recebem seus nomes iniciados por "use"
        (useState, useEffect etc.)
      </p>
      <p>
        Nesta aplicação vamos ver os principais hooks e tentar resumir seu
        funcionamento para que sirva como uma fonte de consulta quando for
        necessário.
      </p>
      <Footer />
    </div>
  );
};

export default Home;
