import React from 'react';
import './Modal.css';
import { FaArrowDown, FaArrowUp, FaSignOutAlt } from 'react-icons/fa';


const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div>
      <div className="modal">
        <button className="close" onClick={onClose}><FaSignOutAlt /></button>
        <p>Cidade, ES - Brasil</p>
        <h1>20ºC Nublado</h1>

        <div className="modal-info">
          <spam className="modal-temp">
            <FaArrowDown />16º<FaArrowUp />25º</spam>
          <spam>Sensação 19ºC</spam>
          <spam>Vento 18km/h</spam>
          <spam>Humidade 89%</spam>
        </div>
        <hr />
        <div className="modal-week">
          <spam>Terça 18º26º</spam>
          <spam>Quarta 18º 28º</spam>
          <spam>Quinta 19º 30º</spam>
          <spam>Sexta 23º35º</spam>
          <spam>Sabado 23º37º</spam>
        </div>
      </div>
    </div>
  )
}

export default Modal;