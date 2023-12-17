import React, {useReducer} from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import { TodoContext } from "./Context/TodoContex";
import TodoReducer from "./Context/reducer"
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App = () => {

  const [todos, dispatch] = useReducer(TodoReducer, []);
  

  return (
    <TodoContext.Provider value={ {todos,dispatch} }>
      <Container fluid >
        <h1 style={ {textAlign:"center"} }> TODO APP WITH CONTEXT API AND USEREDUCER</h1>
      <Todos />
      <TodoForm />
      </Container>
    </TodoContext.Provider>
  );

};

export default App;
