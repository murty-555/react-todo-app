import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const todoList1 = ["todo1", "todo2", "todo3"];

function App() {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState(todoList1);

  const changeHandler = (e) => {
    // console.log(e.target.value)
    e.preventDefault();
    setTodoName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Todo is ", todoName);
    setTodoList([...todoList, todoName]);
    setTodoName("");
    console.log(todoList);
  };

  const deleteTodo = (todo) => {
    let updatedTodos = todoList.filter((todoItem) => todoItem !== todo);
    console.log("deleted: ", todo);
    setTodoList(updatedTodos);
  };
  // console.log(todoList)
  return (
    <div className="App">
      <h1>Todo Application</h1>
      <form className="todo-form" onSubmit={submitHandler}>
        <input
          type="text"
          value={todoName}
          onChange={changeHandler}
          placeholder="Enter your todo"
        />
        <input type="submit" disabled={todoName === ""} />
      </form>
      <h3>Todo list will be shown here!</h3>
      <div className="todo-list">
        {todoList.map((todo, index) => (
          <h4 key={index} onClick={() => deleteTodo(todo)}>
            {todo}
          </h4>
        ))}
      </div>
    </div>
  );
}

export default App;
