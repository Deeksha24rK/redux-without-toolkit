import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { purchase_book } from './BookAction'

const BookContainer = () => {
    const noOfBooks = useSelector(state => state.numberOfBooks)
    const dispatch = useDispatch()
    return (
        <>
            <h1> Number of Books - {noOfBooks}</h1>
            <button onClick={() => { dispatch(purchase_book()) }}>Buy a book</button>
        </>
    )
}

export default BookContainer