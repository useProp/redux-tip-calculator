import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { TipCalculator } from './components/TipCalculator';

function App() {
  return (
    <Provider store={store}>
      <TipCalculator />
    </Provider>
  );
}

export default App;
