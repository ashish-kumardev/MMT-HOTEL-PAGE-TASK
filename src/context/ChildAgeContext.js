import {createContext, useState} from 'react';

export const ChildAgeContext = createContext();

export default function ChildAgeProvider({children}) {
  const [age, setAge] = useState(1);
  return (
    <ChildAgeContext.Provider value={{age, setAge}}>
      {children}
    </ChildAgeContext.Provider>
  );
}
