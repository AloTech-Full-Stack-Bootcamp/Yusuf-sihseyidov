import React, { useState, useEffect } from "react";
import "./App.css";

// Importing Components
import Form from "./components/Form";
import Todolist from "./components/Todolist";
// import Todo from "./components/Todo";

function App() {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [elementStatus, setElementStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  // useEffect
  useEffect(() => {
    filterHandler();
    // saveLocalTodos();
    // getLocalTodos();
  }, [todos, elementStatus]);

  // Functions
  const filterHandler = () => {
    switch (elementStatus) {
      case "completed":
        setfilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  };

  /* //////////////////JUST FOR FURTHER UNDERSTANDING, BUT TRASH FOR NOW, DO NOT CARE ABOUT THIS PART OF CODE ////////////////////
  // // Saving to local
  // const saveLocalTodos = () => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };
  // const getLocalTodos = () => {
  //   if (localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let todoLocal = JSON.parse(localStorage.getItem("todos"));
  //     setTodos(todoLocal);
  //   }
  // };
*/
  return (
    <div className="App">
      <header>
        <h2>My to-do list</h2>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setElementStatus={setElementStatus}
      />
      <Todolist
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
