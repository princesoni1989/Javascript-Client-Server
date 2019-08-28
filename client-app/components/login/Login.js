import React, {Component} from "react";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import {loginUser} from '../../actions/users'
import "./login.css";
import Header from "../Header";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        this.props.loginUserToSystem(this.state).then(res => {
            this.props.history.push('/users')
        })

    }

    render() {
        return (
            <div>
                <Header/>
                <div className="Login">
                    <form>
                        <FormGroup controlId="email">
                            <FormLabel>Email</FormLabel>
                            <FormControl
                                autoFocus
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password">
                            <FormLabel>Password</FormLabel>
                            <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                            />
                        </FormGroup>
                        <Button
                            block
                            disabled={!this.validateForm()}
                            onClick={this.handleSubmit}
                        >
                            Login
                        </Button>
                        <Link to="/signup">Signup</Link>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
    return {
        loginUserToSystem: (data) => {
            return dispatch(loginUser(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)