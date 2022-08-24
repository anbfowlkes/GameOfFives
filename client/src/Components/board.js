import { useEffect, useState } from 'react'
import BoardSquare from './boardsquare'
import '../Styles/board.css'

let arr = []
for (let r = 8; r >= 1; r--) {
    for (let c = 1; c <= 8; c++) {
        arr.push(c.toString() + r.toString())
    }
}
let str = "11"

const Board = () => {

    const [board, setBoard] = useState({})
    const getBoard = () => {
        fetch('http://localhost:3200/tabletop')
            .then((res) => res.json())
            .then((data) => {
                setBoard(JSON.parse(data[0].board))
            })
    }
    useEffect(() => {
        getBoard()
    }, [])
    
    return (
        <div className='board'>
            {arr.map((item) => <BoardSquare key={item} identifier={item}/>)}
            {/* {console.log(arr)} */}
            {console.log("Board here: ", board[11])}
        </div>
    )
}

export default Board