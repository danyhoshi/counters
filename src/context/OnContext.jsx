import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const OnContext = createContext(null);
export const OnContextProvider = ({ children }) => {
  const [on1, setOn1] = useState(false);
  const [on2, setOn2] = useState(false);
  const [on3, setOn3] = useState(false);
  const [on4, setOn4] = useState(false);
  const changeOn1 = () => {
    setOn1((prevState) => !prevState);
  };
  const changeOn2 = () => {
    setOn2((prevState) => !prevState);
  };
  const changeOn3 = () => {
    setOn3((prevState) => !prevState);
  };
  const changeOn4 = () => {
    setOn4((prevState) => !prevState);
  };
  return (
    <>
      <OnContext.Provider
        value={{
          on1,
          on2,
          on3,
          on4,
          changeOn1,
          changeOn2,
          changeOn3,
          changeOn4,
        }}
      >
        {/* Este es el componente que es contenedor del resto de componentes, el que proveera de estados */}
        {children}
        {/* ASI CREO UN COMPONENTE QUE RECIBIRA OTROS COMPONENNTES HIJOS*/}
      </OnContext.Provider>
    </>
  );
};
