import React from "react";

import './Box.css';

function Box({ id, width, height, bgColor, deleteFx }) {

    const deleteBox = () => {
        deleteFx(id);
    }

    return (
        <div className="Box">
            <div className="Box"
                style={{ width: +width, height: +height, backgroundColor: bgColor }}
                data-testid="^Color Box^" >
            </div>
            <button className="Box-BtnDelete" onClick={deleteBox}>X</button>
        </div>
    );
}

export default Box;
