import React from 'react'
import { useAppDispatch } from '../hook';
import { catchAnimal } from '../store/zooSlice'

const CatchBtn: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const handleCatch: React.MouseEventHandler<HTMLButtonElement> = (): void => {
        dispatch(catchAnimal())
    }
    return (
        <>
            <button style={{ cursor: 'pointer', marginBottom: '10px', padding: '3px 8px' }}
                onClick={handleCatch}>Catch</button>
            <h3 style={{ marginBottom: '10px' }}>Zoo</h3>
        </>
    )
}

export default CatchBtn