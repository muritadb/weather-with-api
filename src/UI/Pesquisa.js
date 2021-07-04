import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Pesquisa.css';

const Pesquisa = () => {
  return (
    <div>
      <section className="container-search">
        <input
          type="text"
        />
        <button>
          <FaSearch />
        </button>
      </section>
    </div>
  )
}

export default Pesquisa;