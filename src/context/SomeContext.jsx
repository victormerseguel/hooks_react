import { createContext, useState } from "react";

export const SomeContext = createContext();

export const SomeContextProvider = ({ children }) => {
  const [phrase, setPhrase] = useState(
    "Clique no botão a seguir para alterar este conteúdo"
  );
  const name = "Victor";
  return (
    <SomeContext.Provider value={{ phrase, setPhrase, name }}>
      {children}
    </SomeContext.Provider>
  );
};
