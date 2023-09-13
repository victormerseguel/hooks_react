import React, { useEffect, useState } from "react";

const HookUseCallbackAux = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Buscando dados no DB...");
    setItems(getItems);
  }, [getItems]);

  return (
    <div>
      <span className="divider"></span>
      <h3>Impressão de itens de database pelo componente filho.</h3>
      {items && items.map((item) => <p key={item}>{item}</p>)}
      <span className="divider"></span>
    </div>
  );
};

export default HookUseCallbackAux;
