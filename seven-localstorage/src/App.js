import React, {useEffect, useState} from "react";
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos"


const App = () => {
  const [todos, setTodos] = useState([]);

  // setting todos from localstorade
  useEffect( () => {
    const localTodos = localStorage.getItem("todos");
    console.log("localtodos : "+localTodos );
    if(localTodos){
      setTodos(JSON.parse(localTodos));
    }
  },[]);
  

  const addTodo = async (todo) => {
    setTodos([...todos,todo])
  };


  useEffect( () => {
    localStorage.setItem("todos",JSON.stringify(todos));
  } , [todos]);

  const removeTodo = (id) => {
    setTodos( todos.filter( todo => todo.id !==id ) )
  };



  return ( 
    <Container>
    <Todos  todos={todos} removeTodo={removeTodo}  />
    <TodoForm addTodo={addTodo} />
    </Container>
  )


};

export default App;
