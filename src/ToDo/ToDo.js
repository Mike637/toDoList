import './ToDo.css'
import React,{useState,useEffect} from 'react'
import PropComponent from './PropComponent/PropComponent'

const arr = [{id:1,name:"Mike",surname:"Polikarpov"},{id:3,name:"AleKsey",surname:"Yashonkov"},{id:20,name:"Alex",surname:"Vlasov"}]
const index = arr.findIndex(el => el.id === 20);

arr.splice(index,1,{...arr[index],name:"Vasya"})
console.log(arr)

const generateId = () => (
    Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
)



const ToDo = () => 
{   
    const [toDoList,setToDoList] = useState(JSON.parse(localStorage.getItem("toDo")) || []); 
    const [val,setVal] = useState("")
    
    
    let textInput = React.createRef() 
     
   
    
    const addToDo = () => 
    { 
       if (!textInput.current.value.trim())
       {
        return
       } 
          
     setToDoList(prev => [...prev,{id:generateId(),name:textInput.current.value}]);
     setVal("")
                                   
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
                    <input  type="text" ref={textInput} value={val} onChange = {(e) =>setVal(e.target.value)}   onKeyDown = {addToDoEnterClick}   placeholder = "Type here..."/>
                    <button onClick={addToDo}>Добавить</button>
                </div>
                
                {toDoList.length === 0? <p>There is no one Task</p>:toDoList.map((item,index,array) => (
    
    <PropComponent 
    name ={item.name} 
      index ={index} 
    key = {item.id}
    id = {item.id}
    onDelete = {(id) => setToDoList(array.filter(task => task.id !==id))}
    onChange = {(value,id) =>{
        setToDoList(prev => {
            let newState = [...prev]
            let ind = newState.findIndex(task => task.id === id)
            newState.splice(index,1,{...newState[ind],name:value})
            return newState

        })
    }}
    
    
    />))} 
                  
               
            </div>
        </main>
    )
}

export default ToDo