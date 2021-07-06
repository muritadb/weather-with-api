import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Modal from './Modal';
import './Pesquisa.css';

const Pesquisa = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <section className="container-search">
        <Modal open={isOpen} onClose={() => { setIsOpen(false) }} />
        <input
          type="search"
        />
        <button className="container-search_btn" onClick={() => { setIsOpen(true) }}>
          <FaSearch />
        </button>
      </section>
    </div>
  )
}

export default Pesquisa;