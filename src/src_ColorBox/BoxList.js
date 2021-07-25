import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

import './BoxList.css';

function BoxList() {

    const [boxes, setBoxes] = useState([]);

    const handleAddBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox }]);
    }

    const handleDeleteBox = (id) => {
        setBoxes(boxes.filter(box => box.id !== id));
    }

    return (
        <div className="BoxList-Main">
            <NewBoxForm addBoxFx={handleAddBox} />
            <div>
                {
                    boxes.map(({ id, width, height, bgColor }) => (
                        <Box key={id} id={id} width={width} height={height} bgColor={bgColor} deleteFx={handleDeleteBox} />
                    ))
                }
            </div>

        </div>
    );

}

export default BoxList;
