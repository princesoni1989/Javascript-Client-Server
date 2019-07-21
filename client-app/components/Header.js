import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
        )
    }
}