import {combineReducers} from 'redux'
import Users from './users'
import LoggedInUser from './LoggedInUser'

export default combineReducers({
    Users,
    LoggedInUser
})