import {LOGGEDIN_USER} from '../actions/users'

const initialState = {isLoggedIn: false}

function LoggedInUser(state = initialState, action) {
    switch (action.type) {
        case LOGGEDIN_USER: {
            return {...state, ...action.data}
        }
        default:
            return state
    }
}

export default LoggedInUser