import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setElementStatus }) => {
  // taking care of input field
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  //   taking care of plus(submit) button
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100 },
    ]);
    setInputText("");
  };

  const ElementStatusHandler = (e) => {
    setElementStatus(e.target.value);
  }

  return (
    <form>
      <input
        onChange={inputTextHandler}
        value={inputText}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="selection">
        <select onChange={ElementStatusHandler} name="todos" id="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
