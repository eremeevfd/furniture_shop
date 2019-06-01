import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from '../src/components/navigation';
import './bootstrap.css'
import ItemsList from '../src/components/list';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <ItemsList></ItemsList>
    </div>
  );
}

export default App;
