import React, { useEffect, useLayoutEffect } from "react";
import Footer from "./Footer";

const HookUseLayoutEffect = () => {
  useEffect(() => {
    console.log("1ª declaração useEffect");
    console.log("");
  }, []);
  useEffect(() => {
    console.log("2ª declaração useEffect");
    console.log("");
  }, []);
  useEffect(() => {
    console.log("3ª declaração useEffect");
    console.log("");
  }, []);
  useLayoutEffect(() => {
    console.log("4ª declaração, porém com useLayoutEffect");
    console.log("");
  }, []);

  return (
    <div>
      <h1>useLayoutEffect</h1>
      <p>
        Muito parecido com o hook useEffect, este hook têm a função de
        renderizar funções e objetos, porém o useLayoutEffect carrega seus
        elementos antes da renderização do componente, mesmo que declarado em
        outra ordem.
      </p>
      <p>É possível ver seu funcionamento abrindo o console do navegador.</p>
      <p>
        No código a seguir foram declarados useEffects e useLayoutEffect em uma
        determinada ordem, mas ao analisar o console, é possível notar que a
        ordem em que foram carregados, é diferente da declarada, colocando em
        primeiro o useLayoutEffect e depois os useEffects.
      </p>
      <span className="left">
        <code>{"useEffect(() => {"}</code>
        <code className="indent1">
          {'console.log("1ª declaração useEffect");'}
        </code>
        <code>{"}, []);"}</code>
        <code></code>
        <code>{"useEffect(() => {"}</code>
        <code className="indent1">
          {'console.log("2ª declaração useEffect");'}
        </code>
        <code>{"}, []);"}</code>
        <code></code>
        <code>{"useEffect(() => {"}</code>
        <code className="indent1">
          {'console.log("3ª declaração useEffect");'}
        </code>
        <code>{"  }, []);"}</code>
        <code></code>
        <code className="emphasis">{"  useLayoutEffect(() => {"}</code>
        <code className="indent1 emphasis">
          {'    console.log("4ª declaração, porém com useLayoutEffect");'}
        </code>
        <code className="emphasis">{"  }, []);"}</code>
      </span>

      <Footer name="HookUseLayoutEffect" />
    </div>
  );
};

export default HookUseLayoutEffect;
