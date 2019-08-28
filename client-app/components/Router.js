import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Switch, Route, Link, Redirect} from 'react-router-dom'
import User from "./Users";
import Login from "./login/Login";
import PrivateRoutes from './PrivateRoutes'
import Home from './Home'
import LoggedInUser from "../reducers/users";
import {getUsersList, loggedInuser} from "../actions/users";
import Signup from "./signup/Signup";

class Router extends Component {
    constructor() {
        super()
        this.state = {
            loggedInUser: null
        }
    }

    componentDidMount() {
        this.props.checkUser()
    }

    getLoggedInUser() {
        if (localStorage.getItem('token')) {
            return localStorage.getItem('token')
        }
    }

    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" render={props => {
                    if (this.getLoggedInUser()) {
                        return <Redirect to={{pathname: '/users'}}/>
                    }
                    return <Login {...props}/>
                }}
                />
                <Route path="/signup" render={props => {
                    if (this.getLoggedInUser()) {
                        return <Redirect to={{pathname: '/users'}}/>
                    }
                    return <Signup {...props}/>
                }}
                />
                <PrivateRoutes path="/users" component={User} loggedInUser={this.props.isUserLoggedIn}/>
            </Switch>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isUserLoggedIn: state.LoggedInUser.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkUser: () => {
            dispatch(loggedInuser())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Router)