import React,{useState} from 'react'
import PropTypes from 'prop-types'
import styles from "./../../styles/styles"
const PropComponent = ({name,index,id,onDone,onChange,onDelete}) => 
{
    const [checked,setChecked] = useState(false);
    const [showing,setShowing] = useState(false);
    const [value,SetValue] =useState(name) 
   
return (
    
    <div index ={index}>
    <input type="checkbox" value={name}  checked={checked} onChange = {() => {
        setChecked(true);
        setTimeout(() => onDone(id),1000);
        }}   />
    <p>{name}</p>
    
    {showing === true
    ?<><input value={value} style={styles.PropComponent} onChange={(e)=> SetValue(e.target.value)} className="EditName" type="text"/>
    <button onClick={
        () => {
            onChange(value,id);
            setShowing(prev=> !prev)
        }
         }>Ок</button>
        </> 
       : <div>
     <button   className="Edit" onClick ={ () => setShowing(prev=> !prev)}>Edit</button>
     <button   className="Delete" onClick ={ () => onDelete(id)}>Delete</button>
    </div>
    
         
    
       
}
    
   
    </div>
    
)
}


PropComponent.propTypes = {
   name: PropTypes.string,
   deleteFun:PropTypes.func,
   checked:PropTypes.bool,
   index:PropTypes.number,
}
/*
PropComponent.defaultProps = {
    
}
*/

export default PropComponent