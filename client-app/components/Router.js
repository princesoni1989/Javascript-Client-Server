import React, {Component} from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import User from "./Users";
import AboutUs from "./AboutUs";
import ContactUs from "./Contact";

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={User}/>
                <Route path="/about-us" component={AboutUs}/>
                <Route path="/contact-us" component={ContactUs}/>
            </Switch>
        )
    }
}