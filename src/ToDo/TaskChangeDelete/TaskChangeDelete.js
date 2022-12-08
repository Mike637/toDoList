import React, { useState } from 'react';
import './TaskChangeDelete.css';
import ModalWindow from './ModalWindow/ModalWindow';

const TaskChangeDelete = ({ name, index, id, onDelete, onChange }) => {
  const [checked, setChecked] = useState(false);
  const [showing, setShowing] = useState(false);
  const [value, setValue] = useState(name);
  const [active, setActive] = useState(false);
  /*  Functions  changeFunction and changeFunctionClickEnter contain  onChange-state function
which are transmitted into component ToDo
*/ 
  const changeFunction = (value, id, index) => {
    if (!value.trim()) {
      return;
    }
    onChange(value, id, index);
    setShowing((prev) => !prev);
  };

  const changeFunctionClickEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      changeFunction(value, id, index);
    }
  };

  return (
    <div className='showEditDeleteTask__Task'>
      {showing === true ? (
        <div className='showEditDeleteTask__showingIsTrue showingIsTrue'>
          <div className='showingIsTrue__inputTextBlock'>
            <p>
              <input
                className="showingIsTrue__inputText"
                value={value}
                onKeyDown={changeFunctionClickEnter}
                onChange={(e) => setValue(e.target.value)}
                type="text"
              />
            </p>
          </div>
          <div>
            <button
              className="showingIsTrue__buttonOk"
              onClick={() => changeFunction(value, id, index)}
            >
              Ок
            </button>
            <button
              className="showingIsTrue__buttonCancel"
              onClick={() => {
                setShowing(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className ="showEditDeleteTask__showingIsFalse showingIsFalse">
          <div className="showingIsFalse__showTask">
            <ul>
              <li>
                <input
                  className="showingIsFalse__checkbox"
                  type="checkbox"
                  value={name}
                  checked={checked}
                  onChange={() => {
                    setChecked(true);
                    setTimeout(() => onDelete(id), 1000);
                  }}
                />
                <p className="showingIsFalse__name">{name}</p>
              </li>
            </ul>
          </div>

          <div className="showingIsFalse__editDeleteButton">
            <button
              className="showingIsFalse__buttonEdit"
              onClick={() => setShowing((prev) => !prev)}
            >
              Edit
            </button>
            <button
              className="showingIsFalse__buttonDelete"
              onClick={() => setActive(true)}
            >
              Delete
            </button>
          </div>
        </div>
      )}

      <ModalWindow
        modalActive={active}
        setModalActive={setActive}
        id={id}
        onDelete={onDelete}
      />
    </div>
  );
};

export default TaskChangeDelete;
