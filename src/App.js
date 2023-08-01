// import logo from './logo.svg';
import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState, useEffect } from "react";
function App() {
  let initTodoList;
  if (localStorage.getItem("todos") === null) {
    initTodoList = [];
  } else {
    initTodoList = JSON.parse(localStorage.getItem("todos"));
  }

  let addTodo = (title, desc) => {
    let sno;
    if (todoList.length === 0) {
      sno = 1;
    } else {
      sno = todoList[todoList.length - 1].sno + 1;
    }
    let newTodo = {
      sno,
      title,
      desc,
    };
    setTodoList([...todoList, newTodo]);
  };

  let onDelete = (todo) => {
    setTodoList(
      todoList.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todoList));
  };

  const [todoList, setTodoList] = useState(initTodoList);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <Header title="TO-DO List" />
      <AddTodo addTodo={addTodo} />
      <Todos todoList={todoList} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
