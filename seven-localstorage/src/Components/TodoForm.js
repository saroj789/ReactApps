import React, {useState} from "react";
import {
    Form,
    FormGroup,
    InputGroup,
    Input,
    Button
} from 'reactstrap'
import { v4 } from "uuid";


const TodoForm = ({addTodo}) => {

    const [todoString, setTodoString] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoString === "") {
            return alert("please fill todo...") 
        }
        const todo = {
            todoString: todoString,
            id: v4()
        }
        /// add in todos
        addTodo(todo);

        setTodoString("")
    }

    return(
        <Form onSubmit={handleSubmit}>
            
            <InputGroup>
                <Input type="text" id="todo" placeholder="enter your todo .."
                 value={todoString} onChange={(e) => setTodoString(e.target.value)} 
                />
                <span>
                    <Button color="success">Add Todo</Button>
                </span>
            </InputGroup>
           
        </Form>
    )

}

export default TodoForm;