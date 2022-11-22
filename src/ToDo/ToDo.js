import './ToDo.css'
import React,{useState,useEffect} from 'react'
/*  {toDoList.length === 0? <p>There is no one Task</p>:toDoList.map((item) => <li key={Math.random()}>{item}</li>)}
<p>{JSON.parse(localStorage.getItem("toDo"))}</p>                 
*/ 
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
          
     setToDoList(prev =>  [...prev,textInput.current.value]);                                 
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
                    <input  type="text" ref={textInput} placeholder = "Type here..."/>
                    <button onClick={addToDo}>Нажми</button>
                </div>
                
                {toDoList.length === 0? <p>There is no one Task</p>:toDoList.map((item) => <li key={Math.random()}>{item}</li>)}
            </div>
        </main>
    )
}

export default ToDo