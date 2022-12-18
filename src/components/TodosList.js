import React from "react";
const TodosList = ({todos, setTodos, setEditTodo})=>{
    const handleDelete = ({ id })=>{
        setTodos(todos.filter((todo) => todo.id != id));
    };
    const handleEdit =({id})=>{
        const findTodo = todos.find((todo)=> todo.id === id);
        setEditTodo(findTodo);
    }
  
    return (
        <div className="list-container">
            {todos.map((todo) => (
                <li className="todo-list" key={todo.id}>
                    <input type="text" 
                    value={todo.title} 
                    className = "list"
                    onChange={(event)=> event.preventDefault()}
                    />
                        <button className="button-edit" onClick={()=>handleEdit(todo)}>
                            edit
                        </button>
                        <button className="button-delete" onClick={()=>handleDelete(todo)}>
                            delete
                        </button>
                    
                </li>
            ))}
        </div>
    );
};
export default TodosList;