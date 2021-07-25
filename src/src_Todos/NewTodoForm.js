import React, { useState } from "react";

import "./NewTodoForm.css";

function NewTodoForm({ addTodoFx }) {

    const INITIAL_DATA = { todo: "" };

    const [formData, setFormData] = useState(INITIAL_DATA);

    const handleChange = (evt) => {

        const { name, value } = evt.target;

        setFormData(formData => (
            { ...formData, [name]: value }
        )
        )
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        // Date.now() is the number of milliseconds since Jan. 1, 1970.
        //  Personally, a bit more manageable key than the one uuid creates.
        addTodoFx({ ...formData, id: Date.now() });
        setFormData(INITIAL_DATA);
    }

    return (
        <form className="NewTodoForm" onSubmit={handleSubmit} >
            <label htmlFor="todo">New todo:</label>
            <input
                name="todo"
                id="todo"
                type="text"
                className="NewTodoForm-InpTodo"
                value={formData.todo}
                onChange={handleChange}
            />
            <button className="NewTodoForm-BtnAdd" >Add New Todo</button>
        </form>
    )

}

export default NewTodoForm;