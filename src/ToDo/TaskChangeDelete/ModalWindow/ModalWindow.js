import React from "react";
import Modal from "./ModalWindow.css"

const ModalWindow = ({modalActive,setModalActive,id,onDelete}) => {
    
const deleteFunction = (id) => 
{
    onDelete(id)
    setModalActive(false)
}

    return (
        <div className ={modalActive ? "modal active":"modal"}>
            <div className="modal__container">
            <p>Are you sure you want to delete this task?</p>
            <button onClick={() => deleteFunction(id)}>Yes</button>
            <button onClick = {() => setModalActive(false)}>No</button>
            <button className="close" onClick = {() => setModalActive(false)}>&times;</button>
            </div>
        </div>
    )
}

export default  ModalWindow