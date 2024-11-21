import {createContext, useState} from 'react';

export const ChildContext = createContext();

export default function ChildProvider({children}) {
  const [child, setChild] = useState(0);
  return (
    <ChildContext.Provider value={{child, setChild}}>
      {children}
    </ChildContext.Provider>
  );
}
