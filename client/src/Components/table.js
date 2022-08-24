import Board from './board'
import '../Styles/table.css'


const Table = () => {
    return (
        <div className='table'>
            <div className='left-row'>
                <div className='pieces-label'>
                    <h3>{'Player 1 Pieces'}</h3>
                </div>
                <div className='pieces'>
                    <div className='piece-1'>
                        <div className='piece-value'>
                            <h4>{'1'}</h4>
                        </div>
                    </div>
                    <div className='piece-2'>
                        <div className='piece-value'>
                            <h4>{'3'}</h4>
                        </div>
                    </div>
                    <div className='piece-3'>
                        <div className='piece-value'>
                            <h4>{'5'}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='middle-row'>
                <h2>{'Player 2'}</h2>
                <Board />
                <h2>{'Player 1'}</h2>
            </div>
            <div className='right-row'>
                <div className='pieces-label'>
                    <h3>{'Player 2 Pieces'}</h3>
                </div>
                <div className='pieces'>
                    <div className='piece-1'>
                        <div className='piece-value'>
                            <h4>1</h4>
                        </div>
                    </div>
                    <div className='piece-2'>
                        <div className='piece-value'>
                            <h4>3</h4>
                        </div>
                    </div>
                    <div className='piece-3'>
                        <div className='piece-value'>
                            <h4>5</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Table