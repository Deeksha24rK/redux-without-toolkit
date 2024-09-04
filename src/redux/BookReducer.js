import { BUYBOOK } from "./BookTypes"

const initialState = {
    numberOfBooks: 20
}

const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUYBOOK: return { ...state, numberOfBooks: state.numberOfBooks - 1 }
        default: return state
    }
}

export default BookReducer