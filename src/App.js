import React, { useState } from 'react';
import './App.css';
import { FaSearch } from 'react-icons/fa';
import Capitais from './UI/Capitais';
import Modal from './UI/Modal';
import axios from 'axios';



function App() {
  const [isOpen, setIsOpen] = useState(false); //estado para fechar janela
  const [searchCity, setSearchCity] = useState(''); //estado que busca a cidade no input

  function handlePrevisao() {
    setIsOpen(true);
    axios.get(`https://api.hgbrasil.com/weather?key=74da3f73&city_name= ${searchCity}`).then(response => console.log(response))
      .catch(e => { console.log(e) });
    //console.log(searchCity)

  }




  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>
      <Modal open={isOpen} onClose={() => { setIsOpen(false) }} />

      <section className="container-search">
        <input
          type="text"
          placeholder="Qual a sua Cidade"
          value={searchCity}
          onChange={e => setSearchCity(e.target.value)}

        />
        <button className="container-search_btn" onClick={handlePrevisao} >
          <FaSearch />
        </button>
      </section>
      <Capitais />
    </div>
  );
}

export default App;
