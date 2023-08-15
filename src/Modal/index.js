import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';

function Modal({ children }) {
  return ReactDOM.createPortal(                                   // Vamos a crear un 'React Portal' para renderizar el modal del formulario a otro elemento HTML, va a ser en un nuevo div
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };