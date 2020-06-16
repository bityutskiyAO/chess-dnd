import React from 'react'
import {Square} from "./square";
import {useDrop} from "react-dnd";
import {itemTypes} from "../../constants";
import {canMoveKnight, moveKnight} from "../game";
import {Overlay} from "../overlay";

export const BoardSquare = ({x, y, children}) => {
    const [{ isOver, canDrop}, drop] = useDrop({
        accept: itemTypes.KNIGHT,
        drop: () => moveKnight(x, y),
        canDrop: () => canMoveKnight(x, y),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    })

    return (
        <div
            ref={drop}
            style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
            }}
        >
            <Square theme={(x + y) % 2 === 1 ? 'black' : 'white'}>{children}</Square>

            {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />}

        </div>
    )
}
