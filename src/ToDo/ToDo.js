import './ToDo.css'
import React,{useState,useEffect} from 'react'

const ToDo = () => 
{
    const [toDoList,setToDoList] = useState(JSON.parse(localStorage.getItem("toDo")) || []);
    console.log(toDoList);
    let textInput = React.createRef()    
    const addToDo = () => 
    {
        setToDoList(prev => JSON.stringify(localStorage.setItem("toDo",[...prev,textInput.current.value])));            
    }
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