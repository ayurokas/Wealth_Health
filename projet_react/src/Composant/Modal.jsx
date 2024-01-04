import React, { useEffect } from 'react';
import '../css/modal.css';
import PropTypes from 'prop-types';

/**
 * Composant React pour afficher une modal.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {boolean} props.isOpen - Indique si la modal est ouverte ou fermée.
 * @param {ReactNode} props.children - Les éléments enfants à afficher dans la modal.
 * @param {Function} props.onClose - La fonction de rappel appelée lorsque la modal doit être fermée.
 */

const Modal = ({ isOpen, children, onClose }) => {

  /**
   * Gère la fermeture de la modal lorsque la touche "Escape" est pressée.
   * @param {Event} event - L'événement de pression de touche.
   */
   
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
