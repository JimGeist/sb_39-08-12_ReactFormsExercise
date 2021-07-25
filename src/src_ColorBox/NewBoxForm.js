import React, { useState } from "react";

import './NewBoxForm.css';

function NewBoxForm({ addBoxFx }) {

    const INITIAL_VALUES = { width: '', height: '', bgColor: '' };

    const [formData, setFormData] = useState(INITIAL_VALUES);

    const handleChange = (evt) => {

        const { name, value } = evt.target;
        setFormData(formData => (
            { ...formData, [name]: value }
        ));

    };

    const handleSubmit = (evt) => {

        evt.preventDefault();
        addBoxFx({ ...formData, id: Date.now() });
        setFormData(INITIAL_VALUES);

    };

    return (
        <form className="NewBoxForm" onSubmit={handleSubmit}>
            <label htmlFor="width">Box Width:</label>
            <input
                id="width"
                className="NewBoxForm-InpNbr"
                type="number"
                name="width"
                value={formData.width}
                onChange={handleChange} />
            <label htmlFor="height">Box Height:</label>
            <input
                id="height"
                className="NewBoxForm-InpNbr"
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange} />
            <label htmlFor="bgColor">Box Color:</label>
            <input
                id="bgColor"
                type="text"
                name="bgColor"
                value={formData.bgColor}
                onChange={handleChange} />
            <button className="NewBoxForm-BtnAdd">Add Box</button>
        </form>
    );
}

export default NewBoxForm;
