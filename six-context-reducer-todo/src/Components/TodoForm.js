import React, {useContext, useState} from "react";
import {
    Form,
    InputGroup,
    Button,
    Input
}  from "reactstrap";

import { v4 } from "uuid";
import { TodoContext } from "../Context/TodoContex";
import { ADD_TODO } from "../Context/actions.types";

const TodoForm = () => {

    const [todoString,setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoString === "") {
            return alert("Please enter a todo ");
        } ;

        const todo = {
            todoString,
            id : v4()
        }
        dispatch( {
            type : ADD_TODO,
            payload : todo
        });

        setTodoString("");

    };



    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Input 
                    type="text"
                    name="todo"
                    id="todo"
                    placeholser = "Your next todo ..."
                    value={todoString}
                    onChange={ (e)=> setTodoString(e.target.value) }
                    // value, onchange
                />   

                <Button  color="warning" >
                    Add
                </Button>
            </InputGroup>
           
        </Form>
    )
};

export default TodoForm;