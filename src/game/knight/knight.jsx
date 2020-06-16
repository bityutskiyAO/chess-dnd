import React from 'react'
import {useDrag} from "react-dnd";
import {itemTypes} from "../../constants";

export const Knight = () => {

    const [{isDragging}, drag] = useDrag({
        item: { type: itemTypes.KNIGHT },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
    <span
        ref={drag}
        style={{
            fontSize: 25,
            opacity: isDragging ? 0.5 : 1,
            fontWeight: 'bold',
            cursor: 'move',
        }}
    >
        ♘
    </span>
    )
}
