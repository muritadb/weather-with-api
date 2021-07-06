import React from 'react';
import './Modal.css';


const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div className="modal">
        <button className="close" onClick={onClose}>sair</button>
        <p>Cidade, ES - Brasil</p>
      </div>
    </>
  )
}

export default Modal;