import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white relative p-4 rounded shadow-lg w-1/2">
        <button onClick={onClose} className="absolute top-0 right-0 p-2">
          <span className="text-2xl">&times;</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
