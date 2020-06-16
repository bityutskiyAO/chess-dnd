import React from "react"
import {Knight} from "../knight/knight";
import {Square} from "../square/square";

import './style.css'
import {canMoveKnight, moveKnight} from "../game";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {BoardSquare} from "../square/boardSquare";

export const Board = ({knightPosition}) => {
    const renderSquare = (i, [knightX, knightY]) => {
        const x = i % 8
        const y = Math.floor(i / 8)
        const isKnightHere = x === knightX && y === knightY
        const theme = (x + y) % 2 === 1 ? 'black' : 'white'
        const piece = isKnightHere ? <Knight/> : null

        return (
            <div key={i} onClick={() => handleSquareOnClick(x, y)}>
                <BoardSquare x={x} y={y}>
                    <Square theme={theme}>{piece}</Square>
                </BoardSquare>
            </div>
        )
    }

    const handleSquareOnClick = (toX, toY) => {
        if (canMoveKnight(toX, toY)) {
            moveKnight(toX, toY)
        }
    }

    const squares = []

    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition))
    }

    return (
        <DndProvider
            backend={HTML5Backend}
        >
            <div className="board">
                {squares}
            </div>
        </DndProvider>
    )
}
