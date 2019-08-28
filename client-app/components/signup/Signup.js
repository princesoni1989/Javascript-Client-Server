import React, {Component} from "react";
import {Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import "./signup.css";
import {loginUser, signUpUser} from "../../actions/users";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Header from '../Header'

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            lastName: "",
            name: ""

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
        this.props.signUpUserToSystem({...this.state, id: Math.floor((Math.random() * 100) + 1)})

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
                        <FormGroup controlId="name">
                            <FormLabel>Name</FormLabel>
                            <FormControl
                                value={this.state.name}
                                onChange={this.handleChange}
                                type="name"
                            />
                        </FormGroup>
                        <FormGroup controlId="lastName">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                type="lastName"
                            />
                        </FormGroup>
                        <Button
                            onClick={this.handleSubmit}
                            disabled={!this.validateForm()}
                        >
                            Signup
                        </Button>
                        <Link to="/login">Login</Link>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
    return {
        signUpUserToSystem: (data) => {
            return dispatch(signUpUser(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)