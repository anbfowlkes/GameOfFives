import '../Styles/BoardSquare.css'

const BoardSquare = ( {identifier} ) => {
    return (
        <div className='square'>
            <p>{identifier}</p>
        </div>
    )

} 
   
export default BoardSquare