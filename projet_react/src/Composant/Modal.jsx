import React, { useEffect } from 'react';
import '../css/modal.css';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, children, onClose }) => {

  const handleEscape = (event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  };
  
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

    // Si la modal n'est pas ouverte, retourne null (ne rend rien)
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};


// Validation des types de props avec PropTypes

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Modal;
