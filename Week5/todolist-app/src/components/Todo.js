import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteBtnHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };
  const completeBtnHandler = () => {
    setTodos(
      todos.map((element) => {
        if (element.id === todo.id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return element;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeBtnHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteBtnHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
