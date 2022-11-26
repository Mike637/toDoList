import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'

const PropComponent = ({name,index,id,onDone}) => 
{
    const [checked,setChecked] = useState(false);
return (
    
    <div index ={index}>
    <input type="checkbox" value={name}  checked={checked} onChange = {() => {
        setChecked(true);
        setTimeout(() => onDone(id),1000);
        }}   />
    <p>{name}</p>
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