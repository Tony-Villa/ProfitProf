import React, { useState } from 'react';

const ModalGoal = ({ children, closeModal }) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <div className="modal">
      <div className="modal__container">
        <button
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </button>
        <div className="modal__child">{children}</div>
      </div>
    </div>
  );
};

export default ModalGoal;
