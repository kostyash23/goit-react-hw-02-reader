import React from 'react';
import './App.css';
import Reader from '../reader/Reader';

import publications from '../../date/publications.json';

const App = () => (
  <div>
    <Reader items={publications} />
  </div>
);

export default App;
