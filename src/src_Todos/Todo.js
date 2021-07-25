import React from "react"

import "./Todo.css";

function Todo({ id, todo, deleteFx }) {

    const handleDelete = () => deleteFx(id)

    return (
        <li className="Todo-li" data-testid="^Todo Item^" >
            {todo}
            <button className="Todo-BtnDelete" onClick={handleDelete}>X</button>
        </li>
    )

}

export default Todo;