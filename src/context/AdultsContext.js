import {createContext, useState} from 'react';

export const AdultsContext = createContext();

export default function AdultsProvider({children}) {
  const [adults, setAdults] = useState(1);
  return (
    <AdultsContext.Provider value={{adults, setAdults}}>
      {children}
    </AdultsContext.Provider>
  );
}
