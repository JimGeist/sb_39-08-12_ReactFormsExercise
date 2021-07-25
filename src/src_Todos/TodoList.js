import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

import "./TodoList.css";

function TodoList() {

    const [todoList, setTodoList] = useState([])

    const addTodo = (todoData) => {
        setTodoList(
            [...todoList, { ...todoData }]
        );
    }

    const deleteTodo = (id) => (
        setTodoList(
            todoList.filter(todo => todo.id !== id)
        )
    )

    return (
        <div className="TodoList-Main">
            <h1>Todo List</h1>
            <NewTodoForm addTodoFx={addTodo} />
            <ul>
                {
                    todoList.map(({ id, todo }) =>
                        <Todo id={id} todo={todo} deleteFx={deleteTodo} key={id} />
                    )
                }
            </ul>
        </div >
    )

}

export default TodoList;