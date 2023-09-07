import React, { useState } from "react";
import { useContext } from "react";
import { SomeContext } from "../context/SomeContext";
import { useNavigate } from "react-router-dom";

const HookUseContextAux = () => {
  const { phrase, setPhrase, name } = useContext(SomeContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhrase(input);
    navigate("/usecontext");
  };

  return (
    <div>
      <h1>Teste de useContext</h1>
      <p>Digite um texto abaixo e veja se ele aparece na página anterior.</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="phrase"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Enviar e ir" />
      </form>
    </div>
  );
};

export default HookUseContextAux;
