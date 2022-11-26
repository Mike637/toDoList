import './ToDo.css'
import React,{useState,useEffect} from 'react'
import PropComponent from './PropComponent/PropComponent'


const generateId = () => (
    Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
)



const ToDo = () => 
{   
    const [toDoList,setToDoList] = useState(JSON.parse(localStorage.getItem("toDo")) || []); 
    
    
    
    let textInput = React.createRef() 
     
   
    
    const addToDo = () => 
    { 
       if (textInput.current.value.trim() === "")
       {
        return
       } 
          /*
     setToDoList(prev =>  [...prev,textInput.current.value]);
     */
     setToDoList(prev => [...prev,{id:generateId(),name:textInput.current.value}]);
     
                                   
    }
const addToDoEnterClick = (e) => 
{
    
    if (e.key === "Enter")
    {
        e.preventDefault();
        addToDo();
    }
}

    useEffect(() => {
localStorage.setItem("toDo",JSON.stringify(toDoList))
    },[toDoList])

    useEffect(() => {
        localStorage.getItem("toDo")
            },[])
        
    return (
        <main>
            <div className="main__container">
                <div className="main__toDo">
                    <h3>ToDoApp</h3>
                    <input  type="text" ref={textInput}   onKeyDown = {addToDoEnterClick}   placeholder = "Type here..."/>
                    <button onClick={addToDo}>Добавить</button>
                </div>
                
                {toDoList.length === 0? <p>There is no one Task</p>:toDoList.map((item,index,array) => (
    
    <PropComponent 
    name ={item.name} 
      index ={index} 
    key = {item.id}
    id = {item.id}
    onDone = {(id) => setToDoList(array.filter(task => task.id !==id))}
    
    />))} 
                  
               
            </div>
        </main>
    )
}

export default ToDo