import React,{useState} from 'react'

import  "./TaskChangeDelete.css"
import ModalWindow from "./ModalWindow/ModalWindow"
const TaskChangeDelete = ({name,index,id,onDelete,onChange}) => 
{
    const [checked,setChecked] = useState(false);
    const [showing,setShowing] = useState(false);
    const [value,setValue] =useState(name) 
    const [active,setActive] = useState(false)
   
const changeFunction = (value,id,index) => 
{
    if (!value.trim())
    {
        return
    }
    onChange(value,id,index);
    setShowing(prev=> !prev)  
}

const changeFunctionClickEnter = (e) => 
{
    if (e.key === "Enter")
    {
        e.preventDefault();
        changeFunction(value,id,index);
    }
}

return (
    
    <div className="showEditDeleteTask__Task">
        <ul>
    <li><input className = "showEditDeleteTask__checkbox" type="checkbox" value={name}  checked={checked} onChange = {() => {
        setChecked(true);
        setTimeout(() => onDelete(id),1000);
        }}/>
    <p className="showEditDeleteTask__name">{name}</p></li>
    </ul>
    {showing === true
    ?<>
    <input className="showEditDeleteTask__inputText" value={value}  onKeyDown = {changeFunctionClickEnter} onChange={(e)=> setValue(e.target.value)}  type="text"/>
    <button className="showEditDeleteTask__buttonOk" onClick={ () => changeFunction(value,id,index)}>Ок</button>   
    <button className = "showEditDeleteTask__buttonCancel" onClick = {() =>{setShowing(false)}} >Cancel</button>                           
    </> 
       : <>
     <button   className="showEditDeleteTask__buttonEdit" onClick ={ () => setShowing(prev=> !prev)}>Edit</button>
     <button   className="showEditDeleteTask__buttonDelete" onClick ={ () => setActive(true)}>Delete</button>
    </>            
}
    
   <ModalWindow 
   modalActive = {active}
   setModalActive = {setActive}
   id = {id}
   onDelete = {onDelete}
/>
    </div>
    
)
}



export default  TaskChangeDelete