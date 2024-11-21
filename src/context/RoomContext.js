import {createContext, useState} from 'react';

export const RoomContext = createContext();

export default function RoomProvider({children}) {
  const [room, setRoom] = useState(1);
  return (
    <RoomContext.Provider value={{room, setRoom}}>
      {children}
    </RoomContext.Provider>
  );
}
