import React from "react";
import "./ModalWindow.css";

const ModalWindow = ({ modalActive, setModalActive, id, onDelete }) => {
  /* Function  deleteFunction  contains  onDelete-state function
which is  transmitted into component TaskChangeDelete. 
*/ 
  const deleteFunction = (id) => {
    onDelete(id);
    setModalActive(false);
  };

  return (
    <div
      className={modalActive ? "main__modal modal active" : "main__modal modal"}
    >
      <div
        className={modalActive ? "modal__container active" : "modal__container"}
      >
        <p className="modal__text">
          Are you sure you want to delete this task?
        </p>
        <div className="modal__buttons">
          <button
            className="modal__buttonYes"
            onClick={() => deleteFunction(id)}
          >
            Yes
          </button>
          <button
            className="modal__buttonNo"
            onClick={() => setModalActive(false)}
          >
            No
          </button>
        </div>
        <button className="modal__close" onClick={() => setModalActive(false)}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
