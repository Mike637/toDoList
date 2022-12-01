import React,{useState} from 'react'
import styles from "../../styles/styles"
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
    
    <div index ={index}>
    <input type="checkbox" value={name}  checked={checked} onChange = {() => {
        setChecked(true);
        setTimeout(() => onDelete(id),1000);
        }}/>
    <p>{name}</p>
    
    {showing === true
    ?<>
    <input value={value} style={styles.PropComponent} onKeyDown = {changeFunctionClickEnter} onChange={(e)=> setValue(e.target.value)} className="EditName" type="text"/>
    <button onClick={ () => changeFunction(value,id,index)}>Ок</button>   
    <button onClick = {() =>{setShowing(false)}} >Отмена</button>                           
    </> 
       : <>
     <button   className="Edit" onClick ={ () => setShowing(prev=> !prev)}>Edit</button>
     <button   className="Delete" onClick ={ () => setActive(true)}>Delete</button>
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