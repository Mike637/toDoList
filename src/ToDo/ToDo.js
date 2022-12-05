import './ToDo.css'
import React,{useState,useEffect} from 'react'
import  TaskChangeDelete from './TaskChangeDelete/TaskChangeDelete'
import  "./ToDo.css"



const generateId = () => (
    Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
)



const ToDo = () => 
{   
    const [toDoList,setToDoList] = useState(JSON.parse(localStorage.getItem("toDo")) || []); 
    const [val,setVal] = useState("")
    
    
    let textInput = React.createRef() 
     
   
    
    const addTask = () => 
    { 
       if (!textInput.current.value.trim())
       {
        return
       } 
          
     setToDoList(prev => [...prev,{id:generateId(),name:textInput.current.value}]);
     setVal("")
                                   
    }
const addTaskEnterClick = (e) => 
{
    
    if (e.key === "Enter")
    {
        e.preventDefault();
        addTask();
    }
}

const changeTask = (value,id,index) => 
{
    setToDoList(prev => {
        let newState = [...prev]
        let ind = newState.findIndex(task => task.id === id)
        newState.splice(index,1,{...newState[ind],name:value})
        return newState

    })
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
                <div className="main__addTask addTask">
                    <h3 className ="addTask__title">ToDoApp</h3>
                    <input className="addTask__input"  type="text" ref={textInput} value={val} onChange = {e =>setVal(e.target.value)}   onKeyDown = {addTaskEnterClick}   placeholder = "Type here..."/>
                    <button className="addTask__button" onClick={addTask}>Add</button>
                </div>
                <div className="main__showEditDeleteTask showEditDeleteTask">
                {toDoList.length === 0? <p>There is no one Task</p>:toDoList.map((item,index,array) => (
    
    < TaskChangeDelete
    name ={item.name} 
      index ={index} 
    key = {item.id}
    id = {item.id}
    onDelete = {id => setToDoList(array.filter(task => task.id !==id))}
    onChange = {(value,id,index) =>changeTask(value,id,index)}
    />))}
    
    
    
     
                  
    </div>  
            </div>
        </main>
    )
}

export default ToDo