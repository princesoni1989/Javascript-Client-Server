import fetch from 'node-fetch'
import Users from '../data'

export const GET_USER = 'GET_USER'
export const LOGGEDIN_USER = 'LOGGEDIN_USER'

function getUsers(data) {
    return {
        type: GET_USER,
        data
    }
}

export function getUsersList() {
    return dispatch => {
        return new Promise((resolve, rej) => {
            fetch('http://localhost:8080/api/client/user/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => res.json()).then((res) => {
                dispatch(getUsers(res))
                resolve(res)
            }).catch(e => {
                rej(e)
            })
        })

    }
    return dispatch => {
        dispatch(getUsers(Users))
    }
}

export function loggedInUserResult(value) {
    return {
        type: LOGGEDIN_USER,
        data: {isLoggedIn: value}
    }
}

export function loggedInuser(value) {
    return dispatch => {
        const value = localStorage.getItem('token')
        dispatch(loggedInUserResult(value ? true : false))
    }
}


export function loginUser(data) {
    return dispatch => {
        return new Promise((resolve, rej) => {
            fetch('http://localhost:8080/api/client/user/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => res.json()).then((res) => {
                localStorage.setItem('token', res)
                resolve(res)
                dispatch(loggedInuser(true))
            }).catch(e => {
                rej(e)
            })
        })

    }
}

export function signUpUser(data) {
    return dispatch => {
        return new Promise((resolve, rej) => {
            fetch('http://localhost:8080/api/client/user', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => res.json()).then((res) => {
                localStorage.setItem('token', res)
                resolve(res)
                dispatch(loggedInuser(true))
            }).catch(e => {
                rej(e)
            })
        })

    }
}