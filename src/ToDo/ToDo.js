import './ToDo.css'

const toDo = () => 
{
    return (
        <main>
            <div className="main__container">
                <div className="main__toDo">
                    <h3>ToDoApp</h3>
                    <input type="text" placeholder = "Type here..."/>
                    <button>Нажми</button>
                </div>
                <p>There is no one Task</p>
            </div>
        

        </main>


    )
}

export default toDo