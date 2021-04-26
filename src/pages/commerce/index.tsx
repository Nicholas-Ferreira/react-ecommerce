import React from 'react';

import Shelf from '../../components/Shelf';
import Filter from '../../components/Shelf/Filter';
import FloatCart from '../../components/FloatCart';
import NavBar from '../../components/NavBar'

const App = () => (
  <React.Fragment>
    <NavBar />
    <main>
      <Filter />
      <Shelf />
    </main>
    <FloatCart />
  </React.Fragment>
);

export default App;
