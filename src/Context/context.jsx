/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import info from '../Info/Info.json';

export const Contexto = createContext();

export const ContextoProvider = ({ children }) => {

  const [infor, setInfor] = useState(info.DW);

  // eslint-disable-next-line no-unused-vars
  const updateContexto = (archivo) => {
    setInfor(archivo);
  };


  return (
    <Contexto.Provider value={{ infor, updateContexto }}>
      {children}
    </Contexto.Provider>
  );
};
