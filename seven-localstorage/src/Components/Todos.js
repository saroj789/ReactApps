import React from "react"
import {ListGroup, ListGroupItem } from "reactstrap"
import {FaCheckDouble} from "react-icons/fa"


const Todos = ({todos, removeTodo}) =>{
    return(
        <ListGroup className="mt-5 mb-2">
            {todos.map( todo => (
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span>
                        <FaCheckDouble style={{float:"right"}}
                        onClick={() => removeTodo(todo.id)}
                        />
                    </span>
                </ListGroupItem>
                 ) )
            }
        </ListGroup>
    )

}

export default Todos;