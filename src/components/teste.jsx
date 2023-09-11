import React, { useCallback, useEffect, useState } from "react";

const teste = () => {
  const [state, setState] = useState(0);
  const [stateB, setStateB] = useState(0);
  const [stateC, setStateC] = useState(0);

  useEffect(() => {
    console.log("useEffect acionado");
    setState(state + 1);
  }, [stateB]);
  const callBack = useCallback(() => {
    console.log("useCallback acionado");
    setStateC(stateC + 1);
  }, [stateC]);
  return (
    <div>
      <h1>Teste useCallback e useEffect</h1>
      <button onClick={() => setStateB(state + 1)}>Acionar {state}</button>
      <button onClick={callBack}>Acionar {stateC}</button>
    </div>
  );
};

export default teste;
