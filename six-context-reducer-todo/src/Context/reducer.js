import { ADD_TODO, REMOVE_TODO } from "./actions.types";

const TodoReducer = (state,action) => {

    switch (action.type) {
        case ADD_TODO:
            return [...state,action.payload];
        case REMOVE_TODO:
            return state.filter((todo) => (
                todo.id !== action.payload ? true : false
            )  );
    
        default:
            return state;
    }

};

export default TodoReducer;