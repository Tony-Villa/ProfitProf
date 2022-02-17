import React, { useState } from 'react';
import './ModalGoal.scss';

const ModalGoal = ({ children, closeModal }) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <div className="modal">
      <div className="modal__background"></div>
      <div className="modal__container">
        <div className="modal__child">{children}</div>
      </div>
    </div>
  );
};

export default ModalGoal;
