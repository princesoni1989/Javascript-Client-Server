import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import {connect} from "react-redux";
import {getUsersList, loggedInuser} from "../actions/users";

class Header extends Component {
    constructor() {
        super()
        this.logOut = this.logOut.bind(this)
    }

    logOut() {
        localStorage.removeItem('token')
        this.props.logoutUser()
    }

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Client-App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            {!this.props.isUserLoggedIn ? <Nav.Link><Link to="/login">Login</Link></Nav.Link> : null}
                            {!this.props.isUserLoggedIn ? <Nav.Link><Link to="/signup">Signup</Link></Nav.Link> : null}
                            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                            {this.props.isUserLoggedIn ? <Nav.Link onClick={this.logOut}>Logout</Nav.Link>: null}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
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
        logoutUser: () => {
            dispatch(loggedInuser(false))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)