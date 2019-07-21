import Users from '../data'

export const GET_USER = 'GET_USER'

function getUsers(data) {
    return {
        type: GET_USER,
        data
    }
}

export function getUsersList() {
    return dispatch => {
        dispatch(getUsers(Users))
    }
}
