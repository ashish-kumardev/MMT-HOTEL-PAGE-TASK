import React from 'react';
import Home from './src/Home';
import AdultsProvider from './src/context/AdultsContext';
import ChildProvider from './src/context/ChildContext';
import RoomProvider from './src/context/RoomContext';
import ChildAgeProvider from './src/context/ChildAgeContext';

const App = () => {
  return (
    <RoomProvider>
      <ChildProvider>
        <AdultsProvider>
          <ChildAgeProvider>
            <Home />
          </ChildAgeProvider>
        </AdultsProvider>
      </ChildProvider>
    </RoomProvider>
  );
};

export default App;
