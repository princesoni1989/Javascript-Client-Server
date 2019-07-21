import {GET_USER} from '../actions/users'

const initialState = []

function Users(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return [...state, ...action.data]
        default:
            return state
    }
}

export default Users