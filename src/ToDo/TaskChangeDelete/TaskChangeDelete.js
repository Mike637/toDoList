import React, { useState } from "react";

import "./TaskChangeDelete.css";
import ModalWindow from "./ModalWindow/ModalWindow";
const TaskChangeDelete = ({ name, index, id, onDelete, onChange }) => {
  const [checked, setChecked] = useState(false);
  const [showing, setShowing] = useState(false);
  const [value, setValue] = useState(name);
  const [active, setActive] = useState(false);
/* Functions  changeFunction and changeFunctionClickEnter*/ 
  const changeFunction = (value, id, index) => {
    if (!value.trim()) {
      return;
    }
    onChange(value, id, index);
    setShowing((prev) => !prev);
  };

  const changeFunctionClickEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      changeFunction(value, id, index);
    }
  };

  return (
    <div className="showEditDeleteTask__Task">
      {showing === true ? (
        <div class="showEditDeleteTask__showingIsFalse showingIsFalse">
          <div className="showingIsFalse__inputTextBlock">
            <p>
              <input
                className="showingIsFalse__inputText"
                value={value}
                onKeyDown={changeFunctionClickEnter}
                onChange={(e) => setValue(e.target.value)}
                type="text"
              />
            </p>
          </div>
          <div>
            <button
              className="showingIsFalse__buttonOk"
              onClick={() => changeFunction(value, id, index)}
            >
              Ок
            </button>
            <button
              className="showingIsFalse__buttonCancel"
              onClick={() => {
                setShowing(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div class="showEditDeleteTask__showingIsTrue showingIsTrue">
          <div class="showingIsTrue__showTask">
            <ul>
              <li>
                <input
                  className="showingIsTrue__checkbox"
                  type="checkbox"
                  value={name}
                  checked={checked}
                  onChange={() => {
                    setChecked(true);
                    setTimeout(() => onDelete(id), 1000);
                  }}
                />
                <p className="showingIsTrue__name">{name}</p>
              </li>
            </ul>
          </div>

          <div class="showingIsTrue__editDeleteButton">
            <button
              className="showingIsTrue__buttonEdit"
              onClick={() => setShowing((prev) => !prev)}
            >
              Edit
            </button>
            <button
              className="showingIsTrue__buttonDelete"
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
