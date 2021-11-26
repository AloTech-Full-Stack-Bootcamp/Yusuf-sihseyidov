import React from "react";
// Import Component
import Todo from "./Todo";

const Todolist = ({todos, setTodos, filteredTodos}) => {
  return (
    <div className="todoContainer">
      <ul className="todoList"> 
        {filteredTodos.map(todo=>(
            <Todo setTodos={setTodos} todos={todos} todo={todo} text={todo.text} key={todo.id} />
        ))} 
      </ul>
    </div>
  );
};

export default Todolist;
