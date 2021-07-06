import React from 'react';
import './App.css';
import Capitais from './UI/Capitais';
import Pesquisa from './UI/Pesquisa';

function App() {

  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>

      <Pesquisa />
      <Capitais />
    </div>
  );
}

export default App;
